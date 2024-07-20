import axios from "axios";

const instance = axios.create({
    baseURL: 'http://178.172.201.242:8081/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default instance;
