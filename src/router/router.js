import Vue from 'vue/dist/vue.min.js';
import VueRouter from 'vue-router'
import App from '../App.vue'



Vue.use(VueRouter)
// Vue.use(VueResource)

export const routes = [
    {
        path: "/",
        redirect: "/home",
        name: "App",
        components: {
            default: App
        },
        children: []
    },
]


export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes
})