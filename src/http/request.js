import axios from 'axios';
import { Toast } from 'mint-ui';
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
    return  Promise.reject(error);
  },
);

// response拦截器响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    console.log(res)
    if (res.code === 999) {
      Toast({
        message: '请登录',
        position: 'middle',
        duration: 3 * 1000,
      });
      // vm.$router.push('/login');
      return res;
    }
    if (res.code === 200) {
        console.log(res)
      return res;
    }else{
      Toast({
        message: res.msg,
        position: 'bottom',
        duration: 3 * 1000,
      });
      return Promise.reject(new Error((res && res.msg) ? res.msg : 'Error'));
    }
  },
  (error) => {
    Toast({
      message: error.message,
      position: 'bottom',
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
      Toast({
        message: '请登录',
        position: 'bottom',
        duration: 3 * 1000,
      });
      vm.$router.push('/login');
      return res;
    }
    if (res.code !== 200) {
      Toast({
        message: res.msg,
        position: 'bottom',
        duration: 3 * 1000,
      });
      return Promise.reject(new Error((res && res.msg) ? res.msg : 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    Toast({
      message: error.message,
      position: 'bottom',
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  },
);

export {
  service,
  filereq
};
