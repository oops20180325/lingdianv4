import axios from 'axios'
import { Message } from 'element-ui'
import { _SessionStore } from '@/common/utils/storage'
import {baseapi} from './baseurl'



// create an axios instance
const service = axios.create({
  baseURL:baseapi , 
  timeout: 30000 // request timeout
})
service.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  for (const key in config.data) {
    if (!config.data[key] && config.data[key] !== 0) {
      delete config.data[key]
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    // 401
    if(error.response && error.response.status===401){
      
    }
    const message = error.response ? error.response.msg : '请求错误'; // 暂定.msg 具体看后台接口
    Message({
      showClose: true,
      message: message,
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)

export default service
