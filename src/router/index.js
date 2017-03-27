import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Count from '@/components/Count'
import Dist from '@/components/Dist'
import Time from '@/components/Time'
import Slider from '@/components/Slider'
import LazyLoad from '@/components/LazyLoad'
import Waterfall from '@/components/Waterfall'
import Vwaterfall from '@/components/Vwaterfall'
import Hwaterfall from '@/components/Hwaterfall'
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
      path: '/photos',
      name: 'photos',
      components: {
        default: LazyLoad
      }
    },
    {
      path: '/dist',
      name: 'dist',
      components: {
        default: Dist
      }
    },
    {
      path: '/time',
      name: 'time',
      components: {
        default: Time
      }
    },
    {
      path: '/slider',
      name: 'slider',
      components: {
        default: Slider
      }
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      components: {
        default: Waterfall
      },
      children: [
        {path: '/waterfall/vertical', components: {default: Vwaterfall}},
        {path: '/waterfall/horizontal', components: {default: Hwaterfall}}
      ]
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
