import axios from 'axios';
import Vue from "vue";
import { Toast } from 'mint-ui';
import store from '../store/index'
import Qs from 'querystring';
import vm from '@/main';
// import { Indicator } from 'mint-ui';
axios.defaults.withCredentials = true;
Vue.$loading.stophide==3
// 创建axios实例
const service = axios.create({
  baseURL: '/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type':'application/x-www-form-urlencoded'
  },
});
// request拦截器请求拦截
service.interceptors.request.use(
  (config) => {
    if(store.state.stopshow){
      Vue.$loading.show();
    }else{
      Vue.$loading.hide();
    }
    if (config.method === 'post') {
      config.data = JSON.stringify({
        ...config.data,
      });
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
    Vue.$loading.hide();
    const res = response.data;
    // console.log(res)
    if (res.code === 999) {
      Toast({
        message: '请登录',
        position: 'middle',
        duration: 3 * 1000,
      });
      // vm.$router.push('/login');
      return res;
    }
    if (res.code === "200") {
      return res;
    } else{
      Toast({
        message: "成功",
        position: 'bottom',
        duration: 3 * 1000,
      });
      return  res;
      // return Promise.reject(new Error((res && res.msg) ? res.msg : 'Error'));
    }
  },
  (error) => {
    Vue.$loading.hide();
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
      // vm.$router.push('/login');
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
