import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import lazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(lazyload, {loading: require('common/image/loading.gif')})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
