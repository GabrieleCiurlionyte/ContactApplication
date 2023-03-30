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

//DIVISION METHODS
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

filterPlugin.getDivisionsFiltered = async function(officeID) {
  try {
    const response = await this.http.get(`/offices/records/${officeID}?expand=offices_divisions(office_id).division_id`);
    let divisions = [];
    response.data.expand["offices_divisions(office_id)"].forEach(
      relationship => {
        divisions.push(relationship.expand.division_id);
      }
    );
    return divisions;
  } catch (error) {
    console.log(error);
  }
},

filterPlugin.getFilteredDepartaments = async function(divisionID) {
  try {
    const response = await this.http.get(`/divisions/records/${divisionID}?expand=divisions_departments(division_id).department_id`);
    let departaments = [];
    response.data.expand["divisions_departments(division_id)"].forEach(
      relationship => {
        console.log(relationship.expand.department_id)
        departaments.push(relationship.expand.department_id);
      }
    );
    return departaments;
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

//GROUP METHODS
filterPlugin.getGroupNames = async function (departmentID) {
  try {
    const response = await this.http.get(`/groups/records`);
    let groups = response.data.items;
    return groups.map((group) => group.name);
  } catch (error) {
    console.log(error);
  }
};

filterPlugin.getFilteredGroups = async function(departmentID) {
  try {
    const response = await this.http.get(`/departments/records?expand=departments_groups(department_id).group_id`);
    let departments = response.data.items;
    //Find department with matchingID:
    console.log(departments);
    let foundDepartment = departments.filter(department => department.id == departmentID)[0];
    console.log("Found department");
    console.log(foundDepartment);
    let groups = [];
    foundDepartment.expand["departments_groups(department_id)"].forEach(
      relationship => {
        console.log(relationship.expand.group_id)
        groups.push(relationship.expand.group_id);
      }
    );
    return groups
  } catch (error) {
    console.log(error);
  }
}


//OFFICE METHODS
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


filterPlugin.getOfficesFiltered = async function(companyID) {
  try {
    const response = await this.http.get(`/companies/records/${companyID}?expand=companies_offices(company_id).office_id`);
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
