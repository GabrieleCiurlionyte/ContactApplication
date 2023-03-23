
import axios from "axios";

export const contactPlugin = {};


contactPlugin.http = axios.create({ baseURL: "http://127.0.0.1:8090/api" });

contactPlugin.getContacts = async function(perPage, pageNumber) {
    try {
        const response = await this.http.get(
            `/collections/contacts/records?perPage${perPage}=&page=${pageNumber}`
        );
        return response.data.items;
    } catch (error) {
        console.log(error);
    }
},

contactPlugin.getAllContacts = async function() {
  try {
      const response = await this.http.get(
          `/collections/contacts/records`
      );
      return response.data.items;
  } catch (error) {
      console.log(error);
  }
},

contactPlugin.getContact = async function(id) {
  try {
    const response = await this.http.get(
        `/collections/contacts/records/${id}`
    );
    return response.data;
} catch (error) {
    console.log(error);
}
},

contactPlugin.getContactCount = async function() {
  try {
    const response = await this.http.get(
        `/collections/contacts/records`
    );
    return response.data.totalItems;
} catch (error) {
    console.log(error);
}
}


export default {
    install(Vue) {
      Vue.prototype.$contactPlugin = contactPlugin;
    }
  };