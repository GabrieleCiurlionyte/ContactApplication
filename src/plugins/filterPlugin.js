import axios from "axios";

export const filterPlugin = {
  companies: [],
};

filterPlugin.http = axios.create({
  baseURL: "http://127.0.0.1:8090/api/collections",
});

filterPlugin.getCompanies = async function () {
  if (filterPlugin.companies.length == 0) {
    try {
      const response = await this.http.get(`/companies/records`);
      let companies = response.data.items;
      return companies;
    } catch (error) {
      console.log(error);
    }
  } else {
    return filterPlugin.companies;
  }
};

filterPlugin.getCompanyNames = async function () {
  try {
    const response = await this.http.get(`/companies/records`);
    let companies = response.data.items;
    return companies.map((company) => company.name);
  } catch (error) {
    console.log(error);
  }
};

filterPlugin.getDivisionNames = async function () {
  try {
    const response = await this.http.get(`/divisions/records`);
    let divisions = response.data.items;
    return divisions.map((division) => division.name);
  } catch (error) {
    console.log(error);
  }
};

filterPlugin.getDepartamentNames = async function () {
  try {
    const response = await this.http.get(`/departments/records`);
    let departaments = response.data.items;
    return departaments.map((departament) => departament.name);
  } catch (error) {
    console.log(error);
  }
};

filterPlugin.getGroupNames = async function () {
  try {
    const response = await this.http.get(`/groups/records`);
    let groups = response.data.items;
    return groups.map((group) => group.name);
  } catch (error) {
    console.log(error);
  }
};

filterPlugin.getOfficeNames = async function () {
  try {
    const response = await this.http.get(`/offices/records`);
    let offices = response.data.items;
    return offices.map((office) => office.name);
  } catch (error) {
    console.log(error);
  }
};

export default {
  install(Vue) {
    Vue.prototype.$filterPlugin = filterPlugin;
  },
};
