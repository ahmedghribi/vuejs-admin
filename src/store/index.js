import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import traduction from './modules/traduction.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        traduction,
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
})