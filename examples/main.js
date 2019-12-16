import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import ImageViewer from '../packages';
Vue.use(ImageViewer);
new Vue({
  render: h => h(App),
}).$mount('#app');
