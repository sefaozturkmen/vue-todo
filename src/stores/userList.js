import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserListStore = defineStore('userList', () => {
  const userList = ref(["sefa","ahmet"])
  function addUser(value) {
    userList.value = [...userList.value, value]
  }
  
  function deleteUser(value) {
    userList.value = userList.value.filter(user => user !== value)
  }

  return { userList, addUser, deleteUser }
})
