
import axios from "axios";

export const structuresPlugin = {};


structuresPlugin.http = axios.create({ baseURL: "http://127.0.0.1:8090/api" });

structuresPlugin.getStructures = async function() {
    let data = [];
    await Promise.all([GetDepartaments(), GetDivisions(), GetGroups(), GetOffices()]).then(
        (values) => {
            data = extractDataFromPromise(values);
        }
    )
    return data;
}

function extractDataFromPromise(values) {
    let data = [];
    values.forEach(
        value => {
            value.data.items.forEach( object => data.push(object));
        }
    )
    return data;
}

//Receivement functions
function GetDepartaments() {
    try {
        const response = axios.get(
            `http://127.0.0.1:8090/api/collections/departments/records`
        );
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

function GetDivisions() {
    try {
        const response = axios.get(
            `http://127.0.0.1:8090/api/collections/divisions/records`
        );
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

function GetGroups() {
    try {
        const response = axios.get(
            `http://127.0.0.1:8090/api/collections/groups/records`
        );
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

function GetOffices(){
    try {
        const response = axios.get(
            `http://127.0.0.1:8090/api/collections/offices/records`
        );
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

//Filtering functions of structures
//We filter accroding to collectionName!!!

export default {
    install(Vue) {
      Vue.prototype.$structuresPlugin = structuresPlugin;
    }
  };