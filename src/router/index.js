import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Count from '@/components/Count'
import Dist from '@/components/Dist'
import Time from '@/components/Time'
import Slider from '@/components/Slider'
import LazyLoad from '@/components/LazyLoad'
import LazyLoadDiy from '@/components/LazyLoadDiy'
import LazyLoadDefault from '@/components/LazyLoadDefault'
import waterfall from '@/components/waterfall'
import waterfallV from '@/components/waterfallV'
import waterfallH from '@/components/waterfallH'
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
      },
      children: [
        {path: '/photos/default', components: {default: LazyLoadDefault}},
        {path: '/photos/diy', components: {default: LazyLoadDiy}}
      ]
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
        default: waterfall
      },
      children: [
        {path: '/waterfall/vertical', components: {default: waterfallV}},
        {path: '/waterfall/horizontal', components: {default: waterfallH}}
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
