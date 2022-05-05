import axios from "axios";

export let baseURL = process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com/";

export default axios.create({
    baseURL
})
