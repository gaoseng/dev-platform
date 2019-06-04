import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app';
import './main';
import router from './router'

Vue.use(ElementUI);
new Vue({
  el: '#app',
  // render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
})
