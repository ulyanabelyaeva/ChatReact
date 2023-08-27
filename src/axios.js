import axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://localhost:8090'
});


//добавляет токен в хедеры из local storage при каждом запросе на бэк
instanse.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instanse;