import axios from 'axios'

const http = axios.create({
  baseURL: '/',
  timeout: 5000,
})

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = sessionStorage.getItem('Token')
    //加一个if(req.url.includes('login'))
    /*     if (config.url?.includes('login')) {
      return config
     } */ //就可以让其他请求带上token了
    if (token) {
      // 设置到请求头
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${token}` // 或自定义字段
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default http
