export default {
  incrementAsync ({commit}) {
    setInterval(() => {
      commit('increment')
    }, 1000)
  },
  actionA ({commit}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        var user = {name: 'Hanmeimei', age: 31}
        resolve(user)
      }, 3000)
    })
  },
  actionB ({commit}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 3000)
    })
  }
}
