import axios from "axios";

export const filterPlugin = {
};

filterPlugin.http = axios.create({
  baseURL: "http://127.0.0.1:8090/api/collections",
});

filterPlugin.getCompanies = async function () {
    try {
      const response = await this.http.get(`/companies/records`);
      let companies = response.data.items;
      return companies;
    } catch (error) {
      console.log(error);
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

filterPlugin.getDivisions = async function () {
  try {
    const response = await this.http.get(`/divisions/records`);
    let divisions = response.data.items;
    return divisions;
  } catch (error) {
    console.log(error);
  }
};

//TODO: implement
filterPlugin.getFilteredDepartaments = async function(division) {
  try {
    const response = await this.http.get(`/divisions/records`);
    let divisions = response.data.items;
    return divisions;
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

filterPlugin.getDepartaments = async function () {
  try {
    const response = await this.http.get(`/departments/records`);
    let departaments = response.data.items;
    return departaments;
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


//OFICE PLUGINS
filterPlugin.getOfficeNames = async function () {
  try {
    const response = await this.http.get(`/offices/records`);
    let offices = response.data.items;
    return offices.map((office) => office.name);
  } catch (error) {
    console.log(error);
  }
};

filterPlugin.getOffices = async function () {
  try {
    const response = await this.http.get(`/offices/records`);
    let offices = response.data.items;
    return offices;
  } catch (error) {
    console.log(error);
  }
};

//TODO: test
filterPlugin.getOfficesFiltered = async function(companyName) {
  try {
    const companies = await filterPlugin.getCompanies();
    const matchedCompany = companies.filter(company => company.name == companyName);
    const response = await this.http.get(`/companies/records/${matchedCompany[0].id}?expand=companies_offices(company_id).office_id`);
    console.log(response);
    let offices = [];
    response.data.expand["companies_offices(company_id)"].forEach(
      relationship => {
        console.log(relationship.expand.office_id)
        offices.push(relationship.expand.office_id);
      }
    );
    console.log(offices);    
    return offices;
  } catch (error) {
    console.log(error);
  }
}



export default {
  install(Vue) {
    Vue.prototype.$filterPlugin = filterPlugin;
  },
};
