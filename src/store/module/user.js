const state = {
  userName: 'jiaen'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_UESR_NAME (state, payload) {
    state.userName = payload
  }
}

const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
    dispatch('xxx', '')
  },
  xxx () {
    //
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
