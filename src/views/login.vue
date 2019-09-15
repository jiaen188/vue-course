<template>
  <div>
    <input v-model="userName" />
    <input type="password" v-model="password" />
    <button @click="handleSubmit">登陆</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', [
      'login'
    ]),
    handleSubmit() {
      console.log('handleSubmit')
      this.login({ userName: this.userName, password: this.password })
        .then(() => {
          this.$router.push({
            name: 'home'
          })
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style>

</style>
