import axios from 'axios';

const api = axios.create({
//casa 
baseURL: 'http://192.168.15.14:3333'
//trabalho baseURL: 'http://192.168.1.123:3333'
});

export default api;
