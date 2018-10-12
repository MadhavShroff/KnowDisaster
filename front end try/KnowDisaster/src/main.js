import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
