import api from '../api/imgur';
import qs from 'qs';
import { router } from '../main';

const IMGUR_TOKEN = 'imgur_token'
const state = {
    token: window.localStorage.getItem(IMGUR_TOKEN)
}
const getters = {
    isLoggedIn: state => state.token !== null
}
const actions = {
    logout: ({ commit }) => {
        window.localStorage.removeItem(IMGUR_TOKEN)
        commit('setToken', null);
    },
    login: () => {
        api.login()
    },
    finalizeLogin: ({ commit }, hash) => {
        const tokens = qs.parse(hash.replace("#", ""))
        commit('setToken', tokens.access_token)
        window.localStorage.setItem(IMGUR_TOKEN, tokens.access_token)

        router.push('/')
    }
}
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}