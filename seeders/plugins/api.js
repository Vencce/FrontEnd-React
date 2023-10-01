import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendprojetointegrador-kkn6-dev.fl0.io/api/',
});

export default api