import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ErrorApplication from '../views/application/ErrorApplication.vue'
import Application from '../views/application/Application.vue'
import MainApp from '../components/application/MainApp.vue'
import Chapter from '../components/application/Chapter.vue'
import Verse from '../components/application/Verse.vue'
import {i18n} from '../i18n'
// import appOptions from '../config/app_options'


import Home from '../views/login/Home.vue'
import Login from '../views/login/Login.vue'
import SignUp from '../views/login/SignUp.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      redirect: `index/${i18n.locale}`
    },
    {
      path: 'index/:lang',
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
        {
          path: 'chapter',
          name: 'Chapter',
          component: Chapter,
          meta: {
            title: 'Chapter',
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
        {
          path: '/verse',
          name: 'Verse',
          component: Verse,
          meta: {
            title: 'Verse',
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
        {
          path: 'error',
          name: 'ErrorApplication',
          component: ErrorApplication
        }
      ]
    },

    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/signup',
    //   name: 'SignUp',
    //   component: SignUp
    // },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let language = to.params.lang;
  if (!language) {
    language = 'en';
  }

  if (language in i18n.messages){
    i18n.locale = language
  } else {
    next({ path: i18n.locale+'/error' });
  }



  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next();
});


export default router
