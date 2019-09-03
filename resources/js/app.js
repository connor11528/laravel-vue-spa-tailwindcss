import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import NavBarComponent from './components/NavBarComponent.vue';


Vue.use(VueRouter);

let app = new Vue({
  el: '#app',
  components: {
    NavBarComponent
  },

  router: new VueRouter(routes)
});
