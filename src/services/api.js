import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.139.196:3000'
});

// 192.168.0.110  --> API 