<template>
  <div id="chat-container">
    <ChatRoom id="chat-room" :username="username" v-if="username.length > 3"/>
    <div v-else>
      <input v-model="usernameTemp" placeholder="Username..."/>
      <button v-text="'Submit'" @keypress.enter="username=usernameTemp" @click="username=usernameTemp"/>
    </div>
  </div>
</template>

<script>
import ChatRoom from '@/components/ChatRoom'

export default {
  name: 'Chat',
  data () {
    return {
      roomExists: true,
      username: '',
      usernameTemp: ''
    }
  },
  components: { ChatRoom },
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
