import config from '../../config'
const state = {
  i: 0,
  max: 5,
  all: config.info,
  info: config.info.slice(0, 5),
  caption: config.caption
}
const getters = {
  getCaption (state) {
    return state.caption
  },
  getInfo (state) {
    return state.info
  },
  i (state) {
    return state.i + 1
  },
  sum () {
    return config.info.length
  },
  n () {
    return Math.ceil(config.info.length / state.max)
  }
}
const mutations = {
  prev (state) {
    if (state.i > 0) {
      state.i = state.i - 1
      state.info = state.all.splice(state.i * state.max, state.max)
      console.log(state.info)
    } else {
      return false
    }
  },
  next (state, n) {
    if (state.i < n) {
      state.i = state.i + 1
      state.info = state.all.splice(state.i * state.max, state.max)
      console.log(state.i, config.info)
    } else {
      return false
    }
  }
}
const actions = {
}
export default {
  state,
  mutations,
  getters,
  actions
}
