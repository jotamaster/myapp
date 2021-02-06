import axios from 'axios';

const api = axios.create({
    baseURL: 'http://jeanhernandezo.cl:3800' 
});

export default api;