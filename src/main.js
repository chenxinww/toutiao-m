import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 Vant 全局组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局样式
import './styles/index.less'

// 加载动态设置 Rem 基准值
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
