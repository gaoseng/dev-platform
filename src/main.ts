import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';
// import './main';
import router from './router/index';

Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
