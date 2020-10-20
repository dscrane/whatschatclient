import axios from 'axios';
export default axios.create({
  // baseURL: 'https://young-oasis-67409.herokuapp.com'
  baseURL: 'http://localhost:5500',
  headers: {'Content-Security-Policy': "default-src *"}
})
