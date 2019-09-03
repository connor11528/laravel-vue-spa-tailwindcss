import Welcome from './pages/Welcome.vue';
import Login from './pages/Login.vue';
import Apply from './pages/Apply.vue';
import Employers from './pages/Employers.vue';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome,
      name: 'welocome'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/apply',
      component: Apply,
      name: 'apply'
    },
    {
      path: '/employers',
      component: Employers,
      name: 'employers'
    }
  ]
};
