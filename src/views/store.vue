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
    <button @click="handleRegisterModule">动态注册模块</button>
    <p v-for="(item, index) in todolist" :key="index">{{item}}</p>
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
      userName: state => state.userName,
      todolist: state => state.todo ? state.todo.todolist : []
    }),
    ...mapState([
      'appName',
      'appVersion'
    ]),
    ...mapState({
      // todolist: state => state.todo ? state.todo.todolist : []
    }),
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
    },
    handleRegisterModule () {
      // this.$store.registerModule('todo', {
      //   state: {
      //     todolist: [
      //       '学习',
      //       'coding'
      //     ]
      //   }
      // })
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todolist: [
            'user todolist',
            'coding'
          ]
        }
      })
    }
  }
}
</script>

<style>

</style>
