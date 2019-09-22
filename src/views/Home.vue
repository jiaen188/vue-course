<template>
  <div class="home">
    <!-- <em>{{food}}</em>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转某一页</button>
    <button @click="handleClick('replace')">替换某一页</button>
    <button @click="getInfo" :style="{ background: bgColor}">请求数据</button>
    <img :src="url">
    <button @click="handleLogout">退出登录</button>
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12"></i-col>
      <i-col :md="6" :sm="12"></i-col>
      <i-col :md="6" :sm="12"></i-col>
      <i-col :md="6" :sm="12"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserinfo } from '@/api/user'
import { setToken } from '@/lib/util'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      url: '',
      bgColor: ''
    }
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
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'jiaen'
          }
          // query: {
          //   name: 'jiaen'
          // }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo () {
      console.log('请求数据')
      getUserinfo({ userId: 24 }).then(res => {
        console.log('res', res)
        if (Array.isArray(res.data)) {
          this.url = res.data[0].img
          this.bgColor = res.data[0].color
          console.log('cname', res.data[0].cname)
        } else {
          this.url = res.data.img
          this.bgColor = res.data.color
          console.log('cname', res.data.cname, res.data)
        }
      })
    },
    handleLogout() {
      setToken('')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="less">
.home {
  .ivu-col {
    height: 50px;
    margin-top: 10px;
    background: pink;
    background-clip: content-box;
  }
  .blue {
    .ivu-col {
      background: blue;
      background-clip: content-box;
    }
  }
}
</style>
