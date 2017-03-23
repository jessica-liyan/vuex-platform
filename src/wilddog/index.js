import Vue from 'vue'
import WildVue from 'wildvue'
import Wilddog from 'wilddog'
Vue.use(WildVue)
Vue.use(Wilddog)
const wilddogApp = Wilddog.initializeApp({
  syncURL: 'https://demotestly.wilddogio.com/'
})
const sync = wilddogApp.sync()
let ref = sync.ref()
export default {
  ref: ref,
  caption: {
    source: sync.ref('/caption'),
    asObject: false,
    cancelCallback: function () {}
  },
  form: {
    source: sync.ref('/form'),
    asObject: false,
    cancelCallback: function () {}
  },
  info: {
    source: sync.ref('/info'),
    asObject: false,
    cancelCallback: function () {}
  },
  menu: {
    source: sync.ref('/menu'),
    asObject: false,
    cancelCallback: function () {}
  },
  resident: {
    source: sync.ref('/resident'),
    asObject: false,
    cancelCallback: function () {}
  }
}
