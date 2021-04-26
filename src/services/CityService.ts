import { api } from './api';

export const CityService = {
  getCities: async function () {
    return api.get('/cities');
  },

  getCityById: function (id: number) {
    return api.get(`/cities/${id}`);
  },
};
