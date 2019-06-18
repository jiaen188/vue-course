<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{inputValue}} -> lastLetter {{inputValueLastLetter}}</p>
    <a-show :content="inputValue" />
    <p>appName: {{appName}} , appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{userName}}, firstLetter: {{firstLetter}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>appVersion: {{appVersion}}</p>
    <button @click="handleChangeUserName">修改userName</button>
   </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
      'appName',
      'appVersion'
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
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION'
    ]),
    ...mapMutations('user', ['SET_UESR_NAME']),
    ...mapActions(['updateAppName']),
    handleChangeAppName () {
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.$store.commit('SET_APP_VERSION')
      /*  this.SET_APP_NAME('newAppName')
      this.SET_APP_VERSION() */
      this.updateAppName()
    },
    handleChangeUserName () {
      this.SET_UESR_NAME('newUserName')
    }
  }
}
</script>

<style>

</style>
