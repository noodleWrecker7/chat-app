export default {
  SOCKET_connect (state) {
    state.isConnected = true
    console.log('aconnect')
    state.rooms.general.displayName = 'hi'
  },

  SOCKET_disconnect (state) {
    state.isConnected = false
    console.log('adc')
  },

  SOCKET_HELLO (state, message) {
    state.rooms.general.displayName = 'hi'
    console.log('a', message)
  }
}
