import VueViewer from './index.vue';
let obj = {};
obj.install = function(Vue, options) {
  Vue.component(VueViewer.name, VueViewer);
}
export {
  VueViewer
};
export default obj;