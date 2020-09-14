import Vue from 'vue/dist/vue.min.js';
import Vuex from 'vuex';
import menuOptions from './modules/menu.js';
import github from './modules/github.js'

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        menuOptions,
        github,
    }
})