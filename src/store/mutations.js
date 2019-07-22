import Vue from 'vue'

export default {
  SET_APP_NAME (state, payload) {
    state.appName = payload
  },
  SET_APP_VERSION (state, payload) {
    Vue.set(state, 'appVersion', 'v2.0')
  },
  SET_STATE_VALUE (state, payload) {
    state.stateValue = payload
  }
}
