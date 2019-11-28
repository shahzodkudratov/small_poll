import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import api from '@/helpers/api'

Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
    router,
    store,
    render: h => h(App),
    async beforeCreate() {
        api.login().catch(() => {
            Vue.notify({
                group: 'msg',
                type: 'error',
                title: 'Not authorized',
            })
            router.push('/login')
        })
    }
}).$mount('#app')