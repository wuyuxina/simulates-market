import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bottomsflags:true,//底部导航show或！show
    stopshow:true,//全局loading白名单
  },
  mutations: {
    //记录底部导航栏的状态
    bottomshow(state,bottomsflags){
      state.bottomsflags=bottomsflags
    },
    // 全局loading白名单
    stopshow(state,stopshows){
      state.stopshow=stopshows
    }
  },
  actions: {
  },
  modules: {
  }
})
