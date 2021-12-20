import Vue from 'vue'
import VueRouter from 'vuerouter'
import App from '.App.vue'
import {routes} from './router/routers'
import vuetify from './plugins/vuetify'
import {store} from  './store/store'

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

new vue({
    render: h => h(App),
    vuetify,
    router: router,
    store
}).$mount('#app')