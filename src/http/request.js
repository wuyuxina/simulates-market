import axios from 'axios';
// import {Message} from 'element-ui';
import Qs from 'querystring';
import vm from '@/main';

axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({
  baseURL: '/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request拦截器请求拦截
service.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// response拦截器响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 999) {
      Message({
        message: '请登录',
        type: 'info',
        duration: 3 * 1000,
      });
      vm.$router.push('/login');
      return res;
    }
    if (res.code === 200) {
      return res;
    }else{
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000,
      });
      return Promise.reject(new Error((res && res.msg) ? res.msg : 'Error'));
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  },
);

// 用于文件上传（不需要Qs.stringify,直接添加form-data就行）
const filereq = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// request拦截器
filereq.interceptors.request.use(
  (config) => {
    const UserId = localStorage.getItem('UserId');
    if (UserId) {
      config.headers.common.UserId = UserId;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// response拦截器
filereq.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code == 999) {
      Message({
        message: '请登录',
        type: 'info',
        duration: 3 * 1000,
      });
      vm.$router.push('/login');
      return res;
    }
    if (res.code !== 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000,
      });
      return Promise.reject(new Error((res && res.msg) ? res.msg : 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  },
);

export {
  service,
  filereq
};
