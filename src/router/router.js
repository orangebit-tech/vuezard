import Vue from 'vue/dist/vue.min.js';

import VueRouter        from 'vue-router'
import App              from '../App.vue'
import Home             from '../components/Home.vue'
import Overview         from '../components/Overview.vue'
import JobExperience    from '../components/JobExperience.vue'
import Skills           from '../components/Skills.vue'
import Projects         from '../components/Projects.vue'
import Contacts         from '../components/Contacts.vue'





export const routes = [
    {
        path: "/",
        name: "App",
        component: App,
        redirect: 'home',
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
                children: [
                    {
                        path: "/home/overview",
                        name: "Overview",
                        component: Overview,
                    },
                    {
                        path: "/home/jobexperience",
                        name: "Job Experience",
                        component: JobExperience,
                    },
                    {
                        path: "/home/skills",
                        name: "Skills",
                        component: Skills,
                    },
                    {
                        path: "/home/projects",
                        name: "Projects",
                        component: Projects,
                        children: [
                            {
                                path: "/home/projects/gixcore",
                                name: 'Gixcore',
                                componet: Projects,
                            },
                            {
                                path: "/home/projects/theassistant",
                                name: 'The Assistant',
                                componet: Projects,
                            },
                            {
                                path: "/home/projects/electrominer",
                                name: 'Electrominer',
                                componet: Projects,
                            }
                        ]
                    },
                    {
                        path: "/home/contacts",
                        name: "Contacts",
                        component: Contacts,
                    },
                ]
            },
            
        ]
    },
    
]
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes
})