import config from '../../config'
const state = {
  i: 0,
  max: 10,
  show: false,
  info: config.info,
  caption: config.caption
}
const getters = {
  show (state) {
    return state.show
  },
  getCaption (state) {
    return state.caption
  },
  getInfo (state) {
    return state.info
  },
  idx (state) {
    return state.i * state.max
  },
  i (state) {
    return state.i + 1
  },
  sum (state) {
    return state.info.length
  },
  n (state) {
    return Math.ceil(state.info.length / state.max)
  },
  limit (state) {
    return state.info.slice(state.i * state.max, (state.i + 1) * state.max)
  }
}
const mutations = {
  prev (state) {
    if (state.i > 0) {
      state.i = state.i - 1
    } else {
      return false
    }
  },
  next (state, n) {
    if (state.i < n - 1) {
      state.i = state.i + 1
    } else {
      return false
    }
  },
  home (state) {
    state.i = 0
  },
  end (state, n) {
    state.i = n - 1
  },
  search (state, payload) {
    state.info = config.info
    if (payload.name === '' && payload.type !== '') {
      state.info = state.info.filter(function (item) {
        return item.type.match(payload.type)
      })
    } else if (payload.name !== '' && payload.type === '') {
      state.info = state.info.filter(function (item) {
        return item.tit.match(payload.name)
      })
    } else if (payload.name !== '' && payload.type !== '') {
      state.info = state.info.filter(function (item) {
        return item.tit.match(payload.name) && item.type.match(payload.type)
      })
    } else {
      state.info = state.info
    }
  },
  showMask (state) {
    state.show = true
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
