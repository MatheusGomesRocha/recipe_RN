import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.0.110:3000'
});


// 192.168.42.20  --> API para quando fica um sinal de PC na Internet
// 192.168.0.110  --> API normal