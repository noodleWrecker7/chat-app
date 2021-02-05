<template>
  <div class="container">
    <div>{{ room.displayName }}</div>
    <div id="messages">
      <UserMessage :key='index' v-for="(message, index) in room.messages" :message="message"></UserMessage>
    </div>
  </div>
</template>

<script>
import UserMessage from '@/components/UserMessage'
export default {
  name: 'ChatRoom',
  components: { UserMessage },
  props: [
    'room'
  ]
}
</script>

<style scoped>

</style>
