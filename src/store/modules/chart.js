import config from '../../config'
const state = {
  resident: config.resident,
  residentName: [],
  residentAge: [],
  residentSex: [],
  color: [],
  count: 0
}
const getters = {
  getResident (state) {
    return state.resident
  },
  getName (state) {
    state.resident.forEach((item) => {
      state.residentName.push(item.name)
    })
    return state.residentName
  },
  getAge (state) {
    state.resident.forEach((item) => {
      state.residentAge.push(item.age)
    })
    return state.residentAge
  },
  // 某个字段分类计数
  getSex (state) {
    state.resident.forEach((item) => {
      state.residentSex.push(item.sex)
    })
    return state.residentSex
  },
  getSexCount (state) {
    state.residentSex.sort()
    for (var i = 0; i < state.residentSex.length; i++) {
      for (var j = i; j < state.residentSex.length; j++) {
        if (state.residentSex[i] === state.residentSex[j]) {
          state.count ++
        }
        console.log(state.residentSex[i], state.count)
      }
      i += state.count
    }
  },
  setColor (state) {
    state.color = ['rgb(245, 112, 105)', 'rgb(255, 179, 152)', 'rgb(159, 217, 190)', 'rgb(101, 138, 212)', 'rgb(213, 105, 153)']
    return state.color
  }
}
const mutations = {
}
const actions = {
}
export default {
  state,
  mutations,
  getters,
  actions
}
