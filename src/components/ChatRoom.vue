<template>
  <div class="container">
    <UserList id='users-list' :connected-users="connectedUsers"/>

    <div id="messages-section">
      <p id="room-title">{{ displayName }}</p>
      <div id="messages">
        <UserMessage :key='index' v-for="(message, index) in messages" :message="message"></UserMessage>
      </div>
      <div id="send-message-section"><textarea v-model="textBody"></textarea>
        <!--        <div class="send-icon-container">-->
        <i @click="sendMessage()" class="fas fa-paper-plane send-icon"></i>
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import UserMessage from '@/components/UserMessage'
import UserList from '@/components/UserList'
import { mapState } from 'vuex'

export default {
  name: 'ChatRoom',
  data () {
    return { textBody: '' }
  },
  components: {
    UserList,
    UserMessage
  },
  computed: {
    ...mapState([
      'messages',
      'connectedUsers',
      'displayName'
    ])
  },
  props: {
    room: Object,
    username: String
  },
  methods: {
    sendMessage () {
      console.log('sending message' + this.textBody)
      this.$socket.emit('messagetoserver', {
        body: this.textBody,
        name: this.username,
        time: new Date().toTimeString()
      })
      this.textBody = ''
    }
    /* ...mapActions([
  ''
]) */
  }
}
</script>

<style scoped>
.send-icon {
  margin: auto;
  font-size: 5vh;
  margin-right: 2vw;
  margin-left: 1vw;
}

.send-icon-container {
  font-size: 5vw;
  border-radius: 50%;
  border: 1px solid black;
  /*width: 9vw;
  height: 9vw;*/
  height: min-content;
  width: min-content;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: space-around;
}

textarea {
  resize: none;
  flex-grow: 1;
  border-radius: 1vw;
  padding: 1%;
}

textarea:active, textarea:focus {
  outline: 0;
}

#send-message-section {
  /*background: grey;*/
  /*border-top: 1px solid grey;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;*/

  height: 20vh;
  max-height: 50vh;

  display: flex;
}

#messages {
  overflow: auto;
  height: 95vh;
}

#room-title {
  width: 100%;
  text-align: center;
  background: white;
  margin: 0;
  height: 5vh;
  padding-top: 1.5vh;
  box-sizing: border-box;
}

#messages-section {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow: no-content;
}

.container {
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-flow: row;
}

#users-list {
  max-width: 20vw;
  height: 100%;
  float: left;
}
</style>
