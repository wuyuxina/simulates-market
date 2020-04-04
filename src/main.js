import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入需要的样式开始
import './style/global.css'
import './style/transform.scss'
import './style/index.scss'

//引入第三方组件  mint Ui  暴露的接口是MINT
import MINT from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MINT)

//引入阿里矢量图样式开始
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
