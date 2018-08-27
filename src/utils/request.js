import Jsonp from 'jsonp'
import Axios from 'axios'
import {message} from 'antd'

const service = Axios.create({
  baseURL: 'http://mock.fridolph.wang/mock/5b7527faed98320fb105adae/share',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(res => {
  if (res.status === 200 && res.data.success) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(res)
  }
}, err => {
  if (err.response.status) {
    switch (err.response.status) {
      case 401:
      case 403:
      case 404:
      default:
        message.error('This is a message of error')
    }
    return Promise.reject(err.response)
  }
})

const get = (url, data) => {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: 'get',
      data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: 'post',
      data,
      transformRequest: [
        function(data) {
          let ret = []
          for (let it in data) {
            if (data[it]) {
              ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
            }
          }
          return ret.join('&')
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  })
}

export default {
  jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(options.url, {
        param: 'callback'
      }, (err, res) => {
        if (err) throw new Error(err)
        if (res.status === 'success') {
          resolve(res)
        } else {
          reject(res.message)
        }
      })
    })
  },

  get,

  post
}
