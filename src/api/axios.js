import axios from "axios";

const instance = axios.create({
    baseURL: 'http://93.177.124.115:8081/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default instance;
