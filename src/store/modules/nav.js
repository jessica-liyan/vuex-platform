import config from '../../config'
const state = {
  menu: config.menu
}
const getters = {
  getMenu (state) {
    return state.menu
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
