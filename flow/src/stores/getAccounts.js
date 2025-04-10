import axios from 'axios';

const apiClient = axios.create({
    // The base URL for all API calls to use.
    baseURL: 'https://my-json-server.typicode.com/vednat123/flow',
    withCredentials: false,
    // headers are set to accept and send JSON data
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  
  // Main value that will be exported when this file is imported elsewhere.
  export default {
    getAccounts() {
      // Added onto baseURL
      return apiClient.get('/accounts')
    },
    updateAccount(id, data) {
      return apiClient.put(`/accounts/${id}`, data)
    },
    getAccount(id) {
      return apiClient.get(`/accounts/${id}`)
    }
  }
