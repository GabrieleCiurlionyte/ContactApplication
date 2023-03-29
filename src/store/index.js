import Vue from 'vue';
import Vuex from 'vuex';
import authenticationStore from '../store/modules/authenticationStore';
import managementStore from './modules/managementStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        authenticationStore,
        managementStore,
    },
})