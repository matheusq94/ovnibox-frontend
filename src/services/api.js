import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ovnibox-backend.herokuapp.com',
});

export default api;