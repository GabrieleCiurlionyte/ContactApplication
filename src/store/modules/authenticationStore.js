import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        isAuthenticated : false,
        token: null,
        showHeader: false,
    },
    mutations: {
        updateAuthenticationState(state, boolean) {
            console.log("Authentication state updated from store: " + boolean);
            state.isAuthenticated = boolean;
        },
        updateAuthenticationToken(state, token) {
            console.log("Authentication token updated from store: " + token);
            state.token = "Bearer " +token;
        },
        updateHeaderState(state, boolean) {
            console.log("Updated header state from store: " + boolean);
            state.showHeader = boolean;
        },
    },
}