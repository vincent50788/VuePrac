import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/speedlimits',
    component: () => import('@/components/SpeedLimits')
  },
  {
    path: '/weather',
    component: () => import('@/components/Weather')
  },
  {
    path: '/Taxes',
    component: () => import('@/components/Taxes')
  }
]

const router = new VueRouter({
  routes
}) 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



