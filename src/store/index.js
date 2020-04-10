import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bottomsflags:true,
  },
  mutations: {
    bottomshow(state,bottomsflags){
      state.bottomsflags=bottomsflags
    }
  },
  actions: {
  },
  modules: {
  }
})
