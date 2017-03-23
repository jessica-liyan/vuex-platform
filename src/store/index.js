import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import table from './modules/table'
import chart from './modules/chart'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    table,
    chart
  },
  strict: false
})
