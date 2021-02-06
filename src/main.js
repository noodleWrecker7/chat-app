import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.use(store)

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://msg.noodlewrecker.net',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
    options: {
      withCredentials: true

    }
  }
}))

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
