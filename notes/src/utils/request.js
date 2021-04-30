import axios from "axios";
import store from "../store";
// import router from '../router'
import { Toast } from "vant";

// 创建axios实例
/* eslint-disable*/
const baseUrl = window.BASE_URL || process.env.VUE_APP_URL; // 调用蜂巢url 打包使用
console.log("============>",baseUrl)
const service = axios.create({
  // baseURL: "/api", // 打包使用
  baseURL: baseUrl, // 打包使用
  timeout: 50000, // 请求超时时间(因为需要调试后台,所以设置得比较大)
});
/* eslint-disable*/

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
  (config) => {
    config.headers["currentUser"] = sessionStorage.getItem("userId"); // 当前用户id
    config.headers["token"] = sessionStorage.getItem("token");
    if (!config.slient) {
      // 非静默请求，打开loading页
      store.commit("updateLoading", true);
    }
    return config;
  },
  (error) => {
    console.error(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器,数据返回后进行一些处理
service.interceptors.response.use(
  (response) => {
    store.commit("updateLoading", false); // 关闭loading页
    /**
     * code为非100105是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.status.code === 2000) {
      return res;
    } else if (res.status.code === 5301) {
      setTimeout(() => {
        beeBridge.call({
          path: "Window/BackToLogin",
          data: null,
          success: (res) => { },
        });
      }, 1000);
      return Promise.reject(res.status.message);
      //已经过期，需要登录
    } else {
      console.log(3333);
      Toast.fail(res.status.message || "网络异常");
      return Promise.reject(res.status.message);
    }
  },
  (error) => {
    console.log(5555);
    store.commit("updateLoading", false); // 关闭loading页
    Toast.fail(error.msg || "网络异常");
    return Promise.reject("网络异常");
  }
);
export default service;
