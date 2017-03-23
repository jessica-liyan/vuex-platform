// import config from '../../config'
const state = {
  resident: [],
  residentName: [],
  residentAge: [],
  residentSex: [],
  residentDepart: [],
  color: []
}
const getters = {
  getResident (state) {
    console.log(this.$root.resident)
    state.resident = this.$root.resident
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
  getSex (state) {
    state.resident.forEach((item) => {
      state.residentSex.push(item.sex)
    })
    return state.residentSex
  },
  getDepart (state) {
    state.resident.forEach((item) => {
      state.residentDepart.push(item.department)
    })
    return state.residentDepart
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
