
import axios from "axios";

export const contactPlugin = {};


contactPlugin.http = axios.create({ baseURL: "http://127.0.0.1:8090/api" });
const access_token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE2ODA3ODg5NDEsImlkIjoidWx6YWlxa2U4eDB4ZGkxIiwidHlwZSI6ImF1dGhSZWNvcmQifQ.fDmAwEzkFLH_HooC1EkT6IV6G-w_Dd9ihlNYoNdXVXU";
const url = "http://127.0.0.1:8090/api";

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

contactPlugin.createContact = async function(name, surname,
    phone_number, email, position, company, office, department, division, group){
        //TODO: implement
        let headers = {
            "Content-Type": "application/json",
            //"Authorization": `${token}`,
            Authorization: `${access_token}`,
          };
          let body = JSON.stringify({
            name: name,
            surname: surname,
            phone_number: phone_number,
            email: email,
            position: position,
            company: company,
            office: office,
            department: department,
            division: division,
            group: group,
          });
          fetch(url + "/collections/contacts/records", {
            method: "POST",
            headers: headers,
            body: body,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              return data;
            })
            .catch((error) => {
              console.error(error);
              return error;
            });
    }


export default {
    install(Vue) {
      Vue.prototype.$contactPlugin = contactPlugin;
    }
  };