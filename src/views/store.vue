<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{inputValue}}</p>
    <a-show :content="inputValue" />
    <!-- <p>{{appName}}</p> -->
    <p>{{userName}}</p>
   </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    ...mapState({
      userName: state => state.userName
    })
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
  }
}
</script>

<style>

</style>
