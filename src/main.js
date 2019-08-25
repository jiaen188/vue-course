import Vue from 'vue'
// import App from './App.vue'
import CountTo from './components/count-to'
import router from './router'
import store from './store'
import Bus from './lib/bus'
// import Mock from './mock' // 我们只希望在开发的时候引入mock
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  // render: h => h(App)
  render: h => {
    return h(CountTo, {
      'class': [],
      attrs: {},
      style: {},
      props: {
        endVal: 100
      },
      // domProps: {
      //   innerHTML: ''
      // },
      on: {
        'on-animation-end': (val) => {
          console.log('animation end')
        }
      },
      nativeOn: {
        'click': () => {
          console.log('click!')
        }
      },
      directives: [],
      scopedSlots: {},
      slot: '',
      key: '',
      ref: ''
    })
  }
}).$mount('#app')
