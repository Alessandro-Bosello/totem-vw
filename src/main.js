import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DesignSystem from '@24consulting/design-system-vw'

Vue.use(DesignSystem)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
