const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const createAuthRefreshInterceptor = require('axios-auth-refresh')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('widget'))
app.get('/admin', express.static('dist'))

const credentials = {
    projectID: "6600e36b-4ecc-473b-ac50-d7795256b092",
    key: process.env.JEXIA_API_KEY,
    secret: process.env.JEXIA_API_SECRET,
    access_token: null,
    refresh_token: null
}

const url = `https://${credentials.projectID}.app.jexia.com`

axios({
    method: 'post',
    url: url + '/auth',
    data: {
        method: 'apk',
        key: credentials.key,
        secret: credentials.secret
    }
})

.then(response => {
    credentials.access_token = response.data.access_token
    credentials.refresh_token = response.data.refresh_token
})

.catch(error => {
    throw new Error(error)
})

let api = axios.create({
    baseURL: url,
    timeout: 5000
})

const refreshAuthLogic = failedRequest => axios.post(url + '/auth/refresh', { refresh_token: credentials.refresh_token }).then(tokenRefreshResponse => {
    credentials.access_token = tokenRefreshResponse.data.access_token
    credentials.refresh_token = tokenRefreshResponse.data.refresh_token
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + credentials.access_token
    return Promise.resolve()
})

createAuthRefreshInterceptor.default(api, refreshAuthLogic)

api.interceptors.request.use(config => {
    const access_token = credentials.access_token

    if(access_token) {
        config.headers['Authorization'] = 'Bearer ' + access_token
    }
    
    return config
}, error => {
    Promise.reject(error)
})

app.get('/poll/:uuid', async (req, res) => {
    if(!credentials.access_token) {
        return res.sendStatus(500)
    }

    const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i
    const isValidV4UUID = uuid => uuidV4Regex.test(uuid)
    const uuid = req.params.uuid

    if(isValidV4UUID(uuid)) {
        api({
            method: 'get',
            url: `/ds/polls?cond=[{"field":"id"}, "=", "${uuid}"]`
        })

        .then(polls => {
            if(polls.data.length === 0) {
                return res.sendStatus(404)
            }

            axios.all([
                api({
                    method: 'get',
                    url: `/ds/questions?cond=[{"field":"poll_uuid"}, "=", "${uuid}"]`
                }),

                api({
                    method: 'get',
                    url: `/ds/answers?cond=[{"field":"poll_uuid"}, "=", "${uuid}"]`
                })
            ])
            .then(axios.spread((questions, answers) => {
                let poll = {
                    id: polls.data[0].id,
                    name: polls.data[0].name,
                    message: polls.data[0].message,
                    questions: []
                }

                questions.data.forEach(question => {
                    poll.questions.push({
                        id: question.id,
                        question: question.question,
                        order: question.order,
                        skipped: question.skipped ? true : false,
                        answers: []
                    })
                })

                answers.data.forEach(answer => {
                    poll.questions.find(question => {
                        return question.id === answer.question_uuid
                    }).answers.push({
                        id: answer.id,
                        answer: answer.answer,
                        result: answer.result
                    })
                })

                res.json(poll)
            }))

            .catch(() => {
                return res.sendStatus(500)
            })
        })

        .catch(() => {
            return res.sendStatus(500)
        })
    } else {
        return res.sendStatus(400)
    }
})

app.post('/vote/', async (req, res) => {
    if(!credentials.access_token) {
        return res.sendStatus(500)
    }

    api({
        method: 'get',
        url: `/ds/answers?cond=[{"field":"id"}, "in", ${JSON.stringify(req.body)}]`
    })

    .then(response => {
        axios.all(response.data.map(answer => {
            answer.result++
            
            return api({
                method: 'patch',
                url: `/ds/answers?cond=[{"field":"id"}, "=", "${answer.id}"]`,
                data: {
                    result: answer.result
                }
            })
        }))

        .then(() => {
            return res.sendStatus(200)
        })

        .catch(() => {
            return res.sendStatus(500)
        })
    })

    .catch(error => {
        return res.sendStatus(400)
    })
})

app.listen(80, '0.0.0.0')