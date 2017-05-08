// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import router from './router'
import App from './App'
import Axios from 'axios'

import './stylus/base.styl'
import 'element-ui/lib/theme-default/index.css'

Vue.prototype.$http = Axios
Vue.use(Router)
Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
