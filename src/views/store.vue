<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{inputValue}} -> lastLetter {{inputValueLastLetter}}</p>
    <a-show :content="inputValue" />
    <p>appName: {{appName}} , appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{userName}}, firstLetter: {{firstLetter}}</p>
   </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState, mapGetters } from 'vuex'

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
    ...mapState('user', {
      userName: state => state.userName
    }),
    ...mapState([
      'appName'
    ]),
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
    ...mapGetters('user', [
      'firstLetter'
    ]),
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  }
}
</script>

<style>

</style>
