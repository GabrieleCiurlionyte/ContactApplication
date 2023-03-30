import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        isStructures: true,
    },
    mutations: {
        updateIsStructures(state, boolean) {
            console.log("Management state updated from store: " + boolean);
            state.isStructures = boolean;
        },
    },
}