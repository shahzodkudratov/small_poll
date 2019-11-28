import router from '@/router'
import Vue from 'vue'
import api from '@/helpers/api'



//   _____ _        _
//  / ____| |      | |
// | (___ | |_ __ _| |_ ___
//  \___ \| __/ _` | __/ _ \
//  ____) | || (_| | ||  __/
// |_____/ \__\__,_|\__\___|


const state = {
}



//   _____      _   _
//  / ____|    | | | |
// | |  __  ___| |_| |_ ___ _ __ ___
// | | |_ |/ _ \ __| __/ _ \ '__/ __|
// | |__| |  __/ |_| ||  __/ |  \__ \
//  \_____|\___|\__|\__\___|_|  |___/


const getters = {
}



//  __  __       _        _   _
// |  \/  |     | |      | | (_)
// | \  / |_   _| |_ __ _| |_ _  ___  _ __  ___
// | |\/| | | | | __/ _` | __| |/ _ \| '_ \/ __|
// | |  | | |_| | || (_| | |_| | (_) | | | \__ \
// |_|  |_|\__,_|\__\__,_|\__|_|\___/|_| |_|___/


const mutations = {
}



//               _   _
//     /\       | | (_)
//    /  \   ___| |_ _  ___  _ __  ___
//   / /\ \ / __| __| |/ _ \| '_ \/ __|
//  / ____ \ (__| |_| | (_) | | | \__ \
// /_/    \_\___|\__|_|\___/|_| |_|___/


const actions = {
    //    _       _   _
    //   /_\ _  _| |_| |_
    //  / _ \ || |  _| ' \
    // /_/ \_\_,_|\__|_||_|

    signIn(context, payload) {
        context.commit('setBusy', true, { root: true });

        api.login({ credentials: payload.credentials })

        .then(() => {
            Vue.notify({
                group: 'msg',
                type: 'success',
                title: 'Successfully logged in'
            })

            router.push({ path: '/' })
        })

        .catch(err => {
            Vue.notify({
                group: 'msg',
                type: 'error',
                title: 'err',
            })
            console.log([err]) //eslint-disable-line

            if(router.currentRoute.name !== 'login') {
                router.push({ path: '/login' })
            }
        })

        .finally(() => {
            context.commit('setBusy', false, { root: true })
        })
    },



    //  ___             _
    // | _ \___ __ _ __| |
    // |   / -_) _` / _` |
    // |_|_\___\__,_\__,_|

    async getPolls() {
        return await api.dataModule
        .dataset('polls')
        .select()
        .execute()
    },

    async getQuestions() {
        return await api.dataModule
        .dataset('questions')
        .select()
        .execute()
    },

    async getAnswers() {
        return await api.dataModule
        .dataset('answers')
        .select()
        .execute()
    },

    // getAnswersByPollId(context, payload) {
    //     return api({
    //         method: 'get',
    //         url: `/ds/answers?cond=[{"field":"poll_uuid"}, "=", "${payload.poll_uuid}"]`
    //     })
    // },



    // //   ___              _
    // //  / __|_ _ ___ __ _| |_ ___
    // // | (__| '_/ -_) _` |  _/ -_)
    // //  \___|_| \___\__,_|\__\___|

    // createPoll(context, payload) {
    //     return api({
    //         method: 'post',
    //         url: '/ds/polls',
    //         data: payload.poll
    //     })
    // },

    // createQuestions(context, payload) {
    //     return api({
    //         method: 'post',
    //         url: '/ds/questions',
    //         data: payload.questions
    //     })
    // },

    // createAnswers(context, payload) {
    //     return api({
    //         method: 'post',
    //         url: url + '/ds/answers',
    //         data: payload.answers
    //     })
    // },



    // //  _   _          _      _
    // // | | | |_ __  __| |__ _| |_ ___
    // // | |_| | '_ \/ _` / _` |  _/ -_)
    // //  \___/| .__/\__,_\__,_|\__\___|
    // //       |_|

    // updatePoll(context, payload) {
    //     return api({
    //         method: 'patch',
    //         url: `/ds/polls?cond=[{"field":"id"}, "=", "${payload.poll.id}"]`,
    //         data: {
    //             name: payload.poll.name,
    //             message: payload.poll.message
    //         }
    //     })
    // },

    // updateQuestions(context, payload) {
    //     return axios.all(payload.questions.map(question => {
    //         return api({
    //             method: 'patch',
    //             url: `/ds/questions?cond=[{"field":"id"}, "=", "${question.id}"]`,
    //             data: {
    //                 question: question.question,
    //                 order: question.order,
    //                 skipped: question.skipped ? true : false
    //             }
    //         })
    //     }))
    // },

    // updateAnswers(context, payload) {
    //     return axios.all(payload.answers.map(answer => {
    //         return api({
    //             method: 'patch',
    //             url: `/ds/answers?cond=[{"field":"id"}, "=", "${answer.id}"]`,
    //             data: {
    //                 answer: answer.answer
    //             }
    //         })
    //     }))
    // },



    // //  ___      _     _
    // // |   \ ___| |___| |_ ___
    // // | |) / -_) / -_)  _/ -_)
    // // |___/\___|_\___|\__\___|
    
    // deletePoll(context, payload) {
    //     return axios.all([
    //         api({
    //             method: 'delete',
    //             url: `/ds/polls?cond=[{"field":"id"}, "=", "${payload.poll.id}"]`
    //         }),

    //         api({
    //             method: 'delete',
    //             url: `/ds/questions?cond=[{"field":"poll_uuid"}, "=", "${payload.poll.id}"]`
    //         }),

    //         api({
    //             method: 'delete',
    //             url: `/ds/answers?cond=[{"field":"poll_uuid"}, "=", "${payload.poll.id}"]`
    //         })
    //     ])

    //     .then(() => {
    //         context.commit('poll/deletePoll', { poll: payload.poll }, { root: true })

    //         Vue.notify({
    //             group: 'msg',
    //             type: 'success',
    //             title: 'Poll deleted'
    //         })
    //     })
    // },

    // deleteQuestions(context, payload) {
    //     let questions = payload.questions.map(el => {
    //         return el.id
    //     })

    //     return axios.all([
    //         api({
    //             method: 'delete',
    //             url: `/ds/questions?cond=[{"field":"id"}, "in", ${JSON.stringify(questions)}]`
    //         }),

    //         api({
    //             method: 'delete',
    //             url: `/ds/answers?cond=[{"field":"question_uuid"}, "in", ${JSON.stringify(questions)}]`
    //         })
    //     ])

    //     .then(() => {
    //         context.commit('poll/deleteQuestions', { questions: payload.questions }, { root: true })
    //     })
    // },

    // deleteAnswers(context, payload) {
    //     let answers = payload.answers.map(el => {
    //         return el.id
    //     })

    //     return api({
    //         method: 'delete',
    //         url: `/ds/answers?cond=[{"field":"id"}, "in", ${JSON.stringify(answers)}]`
    //     })

    //     .then(() => {
    //         context.commit('poll/deleteAnswers', { answers: payload.answers }, { root: true })
    //     })
    // }
}



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}