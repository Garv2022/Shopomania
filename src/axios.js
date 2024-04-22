import axios from "axios";

const instance = axios.create({
    baseUrl: "..." //the API (cloud func)url

})

export default instance;