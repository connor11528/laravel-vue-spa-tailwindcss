import Welcome from './pages/Welcome.vue';
import Login from './pages/Login.vue';
import Apply from './pages/Apply.vue';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/candidates',
      component: Apply
    }
  ]
};