import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false;

fetch('https://localhost:44369/whoami', { credentials: 'include', method: 'post' })
    .then(response => response.json())
    .then(data => console.log(data));



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
