import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';

import myself from '@/components/myself/myself';
import set from '@/components/myself/set';
import nickname from '@/components/myself/nickname';
import changepsw from '@/components/myself/changepsw';
import abutus from '@/components/myself/abutus';

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'home',
    	component:home
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/nickname',
      name: 'nickname',
      component: nickname
    },
    {
      path: '/changepsw',
      name: 'changepsw',
      component: changepsw
    },
    {
      path: '/abutus',
      name: 'abutus',
      component: abutus
    }
  ]
})
