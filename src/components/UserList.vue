<template>
  <div class="user-list-container"><p v-for="(user, index) in connectedUsers" :key="index">{{ user }}</p></div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    connectedUsers: Object
  }
}
</script>

<style scoped>

</style>
