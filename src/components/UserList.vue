<template>
  <div class="user-list-container">
    <ul>
    <li class='userlist-name' v-for="(user, index) in connectedUsers" :key="index">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    connectedUsers: Array
  }
}
</script>

<style scoped>

.user-list-container {
  /*border-right: black 1px solid;*/
  border-radius: 15px;
  background: whitesmoke;
}
ul {
  padding-left: 5%;
}
.userlist-name {
  font-size: 1rem;
  margin-right: 2vw;
  margin-left: 2vw;
}

</style>
