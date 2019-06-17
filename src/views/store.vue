<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{inputValue}}</p>
   </div>
</template>

<script>
import AInput from '_c/AInput'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput
  }
}
</script>

<style>

</style>
