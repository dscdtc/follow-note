import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(lazyload, {loading: require('common/image/111.jpg')})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
