import config from '../../config'
const state = {
  i: 0,
  index: 0, // 用来存储删除的记录的索引
  exist: false, // 判断是否存在同名的英文名称
  max: 10,
  add: false, // 弹出新增面板
  change: false, // 弹出修改面板
  info: config.info,
  caption: config.caption,
  list: {
    tit: '',
    entit: '',
    default: '',
    type: '',
    ip: '',
    post: '',
    description: ''
  }
}
const getters = {
  add (state) {
    return state.add
  },
  change (state) {
    return state.change
  },
  list (state) {
    return state.list
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
  // 点击新增，添加遮罩，清空list数据
  showMask (state) {
    state.add = true
    state.list = {
      tit: '',
      entit: '',
      default: '',
      type: '',
      ip: '',
      post: '',
      description: ''
    }
  },
  // 新增--确定
  addlist (state, payload) {
    state.add = false
    config.info.push(payload)
  },
  // 修改--确定
  changelist (state, payload) {
    state.change = false
    config.info.splice(state.index, 1, payload)
  },
  // 点击修改，添加遮罩，匹配list数据
  edit (state, payload) {
    state.change = true
    state.list = payload.item
    state.index = payload.index
  },
  // 点击删除
  del (state, payload) {
    state.index = payload.index
    config.info.splice(state.index + payload.idx, 1)
  }
}
const actions = {
  clear ({commit}) {
    return new Promise((resolve) => {
      commit('addlist')
      commit('clearlist')
      resolve()
    })
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}
