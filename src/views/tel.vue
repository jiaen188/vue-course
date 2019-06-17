<template>
  <div>
    i am tel
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', val => {
      this.message = val
    })
  }
}
</script>

<style>

</style>
