import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import fastClick from 'fastclick'
import vueLazyloda from 'vue-lazyload'

fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();  // 创建个事件总线
Vue.use(ElementUI);

Vue.use(vueLazyloda, {
  error: require('./assets/img/common/vueload.png'),
  loading: require('./assets/img/common/vueload.png'),
  attempt: 1
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
