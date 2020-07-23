import commonPromise, { axiosPostFactory } from './commenPromise'

export default {
  getHomeData () {
    return commonPromise('/api/home/data')
  },
  postData (data: any) {
    return axiosPostFactory({
      headers: { 'Content-Type': 'multipart/form-data' },
      data,
      url: '/api/ubmit'
    })
  }
}