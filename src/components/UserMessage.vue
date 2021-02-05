<template>
  <div>
    <div><h5>{{ message.senderName }}</h5><h6>{{ message.sentTime }}</h6></div>
    <p>{{ message.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserMessage',
  props: {
    message: Object
  }
}
</script>

<style scoped>

</style>
