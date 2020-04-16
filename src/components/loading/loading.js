import Vue from 'vue'
import router from '../../router'
import loadingComponent from '@/components/loading/loading.vue'
const LoadingConstructor = Vue.extend(loadingComponent)

const instance = new LoadingConstructor({
  el: document.createElement('div')
})

instance.show = false // 默认隐藏
const loading = {
  show() { // 显示方法
    instance.show = true
    const routers=router.app._route.fullPath
    console.log(routers)
    if(routers=="/home"||routers=="/category"||routers=="/discover"||routers=="/shopcar"||routers=="/mine"){
      document.getElementById("project").appendChild(instance.$el)
    }else{
      console.log(2)
      document.getElementById("app").appendChild(instance.$el)
    }
  },
  hide() { // 隐藏方法
    instance.show = false
  }
}

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}
