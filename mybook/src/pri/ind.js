import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8080/'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export function getcate () {
  return axios.get('cate')
}

export function getping () {
  return axios.get('ping')
}

export function getshop () {
  return axios.get('splik')
}
