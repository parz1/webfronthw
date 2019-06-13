import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HW1 from '@/components/HW1';
import Experience from '@/components/Experience';
import Works from '@/components/Works';
import Homeland from '@/components/Homeland';
import Resume from '@/components/Resume';


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
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Homeland',
      name: 'Homeland',
      component: Homeland
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
