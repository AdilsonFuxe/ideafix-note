import axios from 'axios';

const api = axios.create({
  baseURL: 'https://note-microservice.herokuapp.com/api/v1',
});

export default api;
