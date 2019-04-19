<template>
  <div class="home">
    <em>{{food}}</em>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转某一页</button>
    <button @click="handleClick('replace')">替换某一页</button>
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('你确定要离开么？')
    if (leave) next()
    else next(false)
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  methods: {
    handleClick(type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'jiaen'
          },
          // query: {
          //   name: 'jiaen'
          // }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
