import PocketBase from "pocketbase";
export const companiesPlugin = {};

const pb = new PocketBase("http://127.0.0.1:8090");

const url = "http://127.0.0.1:8090/companies/";
//TODO: remove the access token when testing is done
//const access_token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE2ODA3ODg5NDEsImlkIjoidWx6YWlxa2U4eDB4ZGkxIiwidHlwZSI6ImF1dGhSZWNvcmQifQ.fDmAwEzkFLH_HooC1EkT6IV6G-w_Dd9ihlNYoNdXVXU";

//Add company
companiesPlugin.createCompany = async function (companyName) {
  let token = this.$store.state.authenticationStore.token;
  let headers = {
    "Content-Type": "application/json",
    "Authorization": `${token}`,
  };
  const body = JSON.stringify({
    name: companyName,
  });
  fetch(url + "records", {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error(error));
};

//ModifyCompany

//DeleteCompany

export default {
  install(Vue) {
    Vue.prototype.$companiesPlugin = companiesPlugin;
  },
};
