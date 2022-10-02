import axios from 'axios';


const API_BASE_URL = `http://localhost:8080/gocheeta`;


export default class Api {

    static user = {
        addUser: (payload) => axios.post(`/api/v1/user`, payload ),
        login:(payload) => axios.post(`/api/v1/user/login`, payload ),
      };

      static cars = {
        getcars: () => axios.get(`/api/v1/vehicle`),
      };

      static street = {
        getstreets: () => axios.get(`/api/v1/street`),
      };

      static city = {
        getcities: () => axios.get(`/api/v1/city`),
      };

      static cost = {
        getTripCost: () => axios.get('/api/v1/trip-cost')
      }

      static booking = {
        makeBooking: (payload) => axios.post('/api/v1/booking', payload)
      }
    }