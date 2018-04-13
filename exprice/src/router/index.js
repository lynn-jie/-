import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';

import myself from '@/components/myself/myself';
import set from '@/components/myself/set';

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
    }
  ]
})
