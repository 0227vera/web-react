import axios, { AxiosRequestConfig } from 'axios'

export default function (url: string, param?: object) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: param })
      .then(({ data }) => {
        data ? resolve(data) : reject(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function axiosPostFactory (param: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    param.method = param.method || 'post'
    param.headers = param.headers || { 'Content-Type': 'application/x-www-form-urlencoded' }
    axios(param).then(({ data }) => {
      data ? resolve(data) : reject(data)
    }).catch((error) => {
      reject(error)
    })
  })
}