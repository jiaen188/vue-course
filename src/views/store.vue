<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{inputValue}}</p>
    <a-show :content="inputValue" />
   </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
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
  }
}
</script>

<style>

</style>
