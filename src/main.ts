import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import VueWindowSize from 'vue-window-size';
import { i18n } from '@/i18n';


Vue.use(VueCookies)
Vue.use(ToastService);
Vue.use(VueWindowSize);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);

import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


// import { languages } from '@/i18n'
// import { defaultLocale } from '@/i18n'
// const messages = Object.assign(languages)

Vue.config.productionTip = false

Vue.$cookies.config('7d')

// const i18n = new VueI18n({
//   locale: defaultLocale,
//   fallbackLocale: 'en',
//   messages
// });


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
