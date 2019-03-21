import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HW1 from '@/components/HW1';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HW1',
      name: 'HW1',
      component: HW1
    }
  ]
})
