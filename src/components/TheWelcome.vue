<script setup>
import { ref, watch } from 'vue';
import { useUserListStore } from '../stores/userList'

const user = ref("")

const test = ref("sefa")
const userList = useUserListStore()

const onSubmit = () => {
  console.log("work")

userList.addUser(user.value)

user.value = ""
}

watch(user,  (newUser, oldUser) => {
  if(newUser.length > 5){
    console.log(newUser.length)
  }
})
</script>

<template>
  <div v-for="user in userList.userList" :key="user">
    {{ user }}
    <button @click="userList.deleteUser(user)">sil</button>
  </div>
  <div v-bind:attributeName="test">sefa
  </div>

  <form @submit.prevent="onSubmit">
    <input type="text" v-model="user">
    <button type="submit">submit</button>
  </form>
</template>
