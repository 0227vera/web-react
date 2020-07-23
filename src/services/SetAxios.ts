import axios from 'axios'
import qs from 'qs'

// 因为不知道返回数据的固定格式，这个地方暂时先全部是any，后期优化
// todo: 给出具体的类型
interface ResponseObj {
    code: any;
    status: any;
    message: any;
    msg: any;
    data: any;
}

// 根据业务后端的返回值可做修改
function formatResponse({ code, status, message, msg, data }: ResponseObj) {
  return {
    code: code != null ? code : status,
    status,
    message: message != null ? message : msg,
    data
  }
}

// 设置默认的上下文
axios.defaults.baseURL = '{{projectContext}}'

// 设置默认的请求，可根据后端的需求做修改
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = (params) => {
  if (params instanceof FormData) {
    return params
  }

  return qs.stringify(params, { skipNulls: true, allowDots: true })
}

// 可以在这个地方做统一的数据拦截和错误提示
axios.interceptors.response.use((response) => {
  if (response.data instanceof Blob) {
    return response.data
  }
  const res = formatResponse(response.data)

  // 可根据业务的统一返回值不同做修改
  if (res.code === 1 || res.code === 0) {
    return res.data
  }
  throw res
})