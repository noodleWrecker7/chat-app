<template>
  <div>Chat
    <ChatRoom v-if='rooms[$route.params.room].displayName' :room='rooms[$route.params.room]'/>
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
  components: { ChatRoom },
  computed: {
    ...mapState([
      'rooms'
    ])
  },
  mounted () {
    // todo update state to get room before its added to dom
  }

}
</script>

<style scoped>

</style>
