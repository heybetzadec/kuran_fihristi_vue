import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Application from '../views/application/Application.vue'
import MainApp from '../components/application/MainApp.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Application',
      component: Application,
      redirect: {
        name: 'route.MainApp'
      },
      children: [
        {
          path: '',
          name: 'MainApp',
          component: MainApp,
          meta: {
            title: 'About Page - Example App',
            metaTags: [
              {
                name: 'description',
                content: 'The about page of our example app.'
              },
              {
                property: 'og:description',
                content: 'The about page of our example app.'
              }
            ]
          },
        },
      ]
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next();
});


export default router
