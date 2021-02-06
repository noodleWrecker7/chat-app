export default {
  SOCKET_connect (context) {
    console.log('aconnect')
    context.displayName = 'hi'
  },

  SOCKET_disconnect (context) {
    console.log('adc')
  },

  SOCKET_messagetoclient (context, message) {
    console.log('a', message)
    context.commit('insertMessage', message)
  }

}
