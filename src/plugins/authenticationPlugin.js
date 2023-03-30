
import axios from "axios";

export const authenticationPlugin = {};


authenticationPlugin.http = axios.create({ baseURL: "http://127.0.0.1:8090/api/collections/users" });

authenticationPlugin.Login = async function(email, password) {
  try {
    console.log("Atempting to login with:" + email + " " + password);
    const data = {
        identity : email,
        password : password,
    };
    const response = await this.http.post(
        `/auth-with-password`, data
    );
    console.log(response.data);
    return response.data;
} catch (error) {
    console.log(error);
    return null;
}
}


export default {
    install(Vue) {
      Vue.prototype.$authenticationPlugin = authenticationPlugin;
    }
  };