// import config from '../../config'
import wilddog from '../../wilddog'
const state = {
  i: 0,
  max: 10, // 每页显示的条数
  info: [],
  caption: [],
  index: 0, // 用来存储删除的记录的索引
  exist: false, // 判断是否存在同名的英文名称
  list: {
    tit: '',
    entit: '',
    default: '',
    type: '',
    ip: '',
    post: '',
    description: ''
  } // 用来存放遮罩字段的数据
}
const getters = {
  // 新增遮罩
  add (state) {
    return state.add
  },
  // 修改遮罩
  change (state) {
    return state.change
  },
  // 当前遮罩字段数据
  list (state) {
    return state.list
  },
  getCaption (state) {
    return state.caption
  },
  getInfo (state) {
    return state.info
  },
  // 协助计算列表的序号
  idx (state) {
    return state.i * state.max
  },
  // 计算当前页数
  i (state) {
    return state.i + 1
  },
  // 计算记录总数
  sum (state) {
    return state.info.length
  },
  // 计算总页数
  n (state) {
    return Math.ceil(state.info.length / state.max)
  },
  // 当前页面显示的列表对象
  limit (state) {
    return state.info.slice(state.i * state.max, (state.i + 1) * state.max)
  }
}
const mutations = {
  // 获取野狗列表表单数据
  getData (state, data) {
    state.info = data
  },
  getCaption (state, data) {
    state.caption = data
  },
  // 上一页
  prev (state) {
    if (state.i > 0) {
      state.i = state.i - 1
    } else {
      return false
    }
  },
  // 下一页
  next (state, n) {
    if (state.i < n - 1) {
      state.i = state.i + 1
    } else {
      return false
    }
  },
  // 首页
  home (state) {
    state.i = 0
  },
  // 尾页
  end (state, n) {
    state.i = n - 1
  },
  // 搜索
  search (state, payload) {
    state.info = state.info
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
  showMask (state, payload) {
    payload.add = true
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
  // 点击修改，添加遮罩，匹配list数据
  edit (state, payload) {
    payload.change = true
    state.list = payload.item
    state.index = payload.index
  },
  // 点击删除
  del (state, payload) {
    state.index = payload.index
    state.info.splice(state.index + payload.idx, 1)
  },
  // 新增遮罩--确定
  addlist (state, payload) {
    wilddog.$wilddogRefs.info.push(payload)
  },
  // 修改遮罩--确定
  changelist (state, payload) {
    state.info.splice(state.index, 1, payload)
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
