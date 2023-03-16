
import "babel-polyfill";
import axios from "axios";

export const contactPlugin = {};


contactPlugin.http = axios.create({ baseURL: "http://127.0.0.1:8090/api" });



export default {
    install(Vue) {
      Vue.prototype.$contactPlugin = contactPlugin;
    }
  };