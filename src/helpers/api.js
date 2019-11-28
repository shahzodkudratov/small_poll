import { jexiaClient, dataOperations } from 'jexia-sdk-js/browser'
import { UMSModule } from 'jexia-sdk-js'
const projectID = '6600e36b-4ecc-473b-ac50-d7795256b092'
const dataModule = dataOperations();
const ums = UMSModule();

console.log(jexiaClient()) //eslint-disable-line

export default {
    dataModule: dataModule,
    login(payload = undefined) {
        return new Promise(async (resolve, reject) => {
            if(payload) {
                await this.auth(payload.credentials)
                .then(() => {
                    localStorage.setItem('credentials', JSON.stringify(payload.credentials))
                    resolve()
                })
                .catch(() => {
                    localStorage.removeItem('credentials')
                    reject()
                })
            } else {
                let credentials = this.retrieveCredentials()

                if(!credentials) {
                    return reject()
                }

                await this.auth(credentials)
                .then(() => {
                    resolve()
                })
                .catch(() => {
                    localStorage.removeItem('credentials')
                    reject()
                })
            }
        })
    },
    auth(credentials) {
        return new Promise(async (resolve, reject) => {
            if(credentials && credentials.method) {
                if(credentials.method === 'apk') {
                    await jexiaClient().init({
                        projectID: projectID,
                        key: credentials.key,
                        secret: credentials.secret
                    }, dataModule)
                    .then(() => {
                        return resolve()
                    })
                    .catch(error => {
                        return reject(error)
                    })
                } else if(credentials.method === 'ums') {
                    jexiaClient().init({
                        projectID: projectID
                    }, ums)

                    ums.signIn({
                        email: credentials.email,
                        password: credentials.password,
                        default: true
                    })
                    .then(() => {
                        return resolve()
                    })
                    .catch(error => {
                        return reject(error)
                    })
                }
            }

            reject()
        })
    },
    retrieveCredentials() {
        let credentials = localStorage.getItem('credentials')
        return credentials ? credentials : undefined
    }
}