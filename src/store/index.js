import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bottomsflags:true,//底部导航show或！show
  },
  mutations: {
    //记录底部导航栏的状态
    bottomshow(state,bottomsflags){
      state.bottomsflags=bottomsflags
    }
  },
  actions: {
  },
  modules: {
  }
})
