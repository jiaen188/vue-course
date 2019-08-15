<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: null
    }
  },
  props: {
    delay: {
      type: Number,
      default: 0
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGroup: {
      type: Boolean,
      default: true
    },
    spearator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount () {
      console.log(this.$refs.number, this.$refs.number.innerText)
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 5)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGroup: this.useGroup,
        spearator: this.spearator,
        deciaml: this.decimal
      })
      if (this.delay) {
        setTimeout(() => {
          this.counter.start()
          this.emitEndEvent()
        }, this.delay)
      } else {
        this.counter.start()
        this.emitEndEvent()
      }
    })
  }
}
</script>

<style lang="less">
@import './count-to.less';
</style>
