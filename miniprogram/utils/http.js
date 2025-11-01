// 导入模块、包提供的类
import wxRequest from 'mina-request'

// 对类进行实例化
export const instance = new wxRequest({
  baseURL:'',
  timeout:15000
})

// 添加请求拦截器
instance.interceptors.request = (config) => {
   
  return config
}

// 添加响应拦截器
instance.interceptors.response = (response) => {

  return response
}

