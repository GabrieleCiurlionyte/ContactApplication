import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        isAuthenticated : false,
        token: null,
    },
    mutations: {
        updateAuthenticationState(state, boolean) {
            console.log("Authentication state updated from store");
            state.isAuthenticated = boolean;
        },
        updateAuthenticationToken(state, token) {
            console.log("Authentication token updated from store");
            state.token = token;
        },
    },
}