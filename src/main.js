import Vue from 'vue'
import App from './App.vue'
import ImageViewer from './lib';
Vue.use(ImageViewer);
new Vue({
  el: '#app',
  render: h => h(App)
})
