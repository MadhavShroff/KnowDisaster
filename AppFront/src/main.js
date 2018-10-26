// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Homepage from './components/HomePage'
import number from './components/Number'
import heatmap from './components/heatmap'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

export const bus = new Vue();


const routes = [

{path:'/Homepage',component: Homepage},
{path:'/',component:number},
{path:'/heatmap',component: heatmap}

];

const router = new VueRouter({
	routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
