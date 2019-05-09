import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus' // plugin que se usa para comunicar un componente con otro que no son hijo ni padre

Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({
  routes, // que es la simplificación de routes: routes
  mode: 'history' // de esta manera le decimos que use el historial nativo y quita el caracter de la url /#/
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
