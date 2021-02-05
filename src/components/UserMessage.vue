<template>
  <div class="message-container">
    <div class="message-send-data">
      <h5 class="sender-name">{{ message.senderName }}:</h5>
      <h6 class="sent-time"> {{ message.time }}</h6>
    </div>
    <p class="message-body">{{ message.text }}</p>
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

/*.sent-time {
  justify-content: end;
}

.sender-name {
  justify-self: start;
}*/

.message-body {
  margin: 0;
  padding-right: 4em;
  padding-left: 4em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  text-align: start;
}

.message-send-data > h5, .message-send-data > h6 {
  padding-left: 2%;
  padding-right: 2%;
  margin: 0;
  margin-top: 1%;
}

.message-send-data {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.message-container {
  border-bottom: solid 1px grey;
}

</style>
