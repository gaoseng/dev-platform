import Vue from 'vue';
import App from './App';

console.log('main');
new Vue({
    el: '#app',
    // render: h => h(App),
    // router,
    components: { App },
    template: '<App/>'
  });