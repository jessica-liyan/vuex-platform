import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Count from '@/components/Count'
import bar from '@/components/bar'
import line from '@/components/line'
import pie from '@/components/pie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home
      }
    },
    {
      path: '/count',
      name: 'count',
      components: {
        default: Count
      },
      children: [
        {path: '/count/bar', components: {default: bar}},
        {path: '/count/line', components: {default: line}},
        {path: '/count/pie', components: {default: pie}}
      ]
    }
  ]
})
