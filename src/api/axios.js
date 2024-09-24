import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.teahub.by/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export default instance;
