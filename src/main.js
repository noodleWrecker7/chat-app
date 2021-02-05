import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
try {
  const SocketInstance = socketio('https://msg.noodlewrecker.net')
  Vue.use(SocketInstance, VueSocketIO)
} catch (e) {
  console.log('OOOOOH NOOOO BIG BAD BOO BOO ERROR THE SERVER NO CONNECTY')
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
