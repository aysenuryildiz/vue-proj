import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueResource from 'vue-resource'
import VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);  // Add this
Vue.use(vueResource);
Vue.config.productionTip = false

new Vue({
  router,   
  render: h => h(App),
}).$mount('#app')
