<template>
  <div>Chat
    <ChatRoom :room='rooms[$route.params.room]'/>
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
  }
}
</script>

<style scoped>

</style>
