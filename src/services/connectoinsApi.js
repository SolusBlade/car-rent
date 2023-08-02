import axios from 'axios';

axios.defaults.baseURL = 'https://64ca4c5f700d50e3c704ac0a.mockapi.io/api';

// Запросы для работы с юзером

export const getAdvertsApi = () => {
  return axios.get('/adverts').then(r => r.data);
};
