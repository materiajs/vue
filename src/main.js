import Vue from 'vue';
import App from './App.vue';
import toolblox from '.';

Vue.config.productionTip = false;
Vue.use(toolblox);

new Vue({
  render: h => h(App),
}).$mount('#app');
