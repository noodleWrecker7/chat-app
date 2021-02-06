<template>
  <div id="chat-container">
    <ChatRoom id="chat-room" :send-message="sendMessage" :room='rooms[$route.params.room]' v-if='currentRoom'/>
    <div v-else>Room not found
      <router-link to='/chat/general'>Return to general</router-link>
    </div>
  </div>
</template>

<script>
import ChatRoom from '@/components/ChatRoom'
import { mapState } from 'vuex'

export default {
  name: 'Chat',
  data () {
    return {}
  },
  methods: {
    sendMessage (body) {
      console.log('sending message' + body + this.$route.params.room)
      this.$socket.emit('messagetoserver', { room: this.$route.params.room, body: body })
    }
  },
  components: { ChatRoom },
  computed: {
    ...mapState([
      'rooms'
    ]),
    currentRoom () {
      return this.rooms[this.$route.params.room]
    }
  },
  mounted () {
    // todo update state to get room before its added to dom
    // getroom(params.room)

    // this.currentRoomName = this.rooms[this.$route.params.room]
  }

}
</script>

<style scoped>

#chat-room {

}

#chat-container {
  /*background: green;*/
  height: 100%;
}

</style>
