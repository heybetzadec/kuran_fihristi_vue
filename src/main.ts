import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Breadcrumb  from 'primevue/breadcrumb';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import ScrollPanel from 'primevue/scrollpanel';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';
import DataView from 'primevue/dataview';
import DataTable  from 'primevue/datatable';
import Column  from 'primevue/column';

import ToastService from 'primevue/toastservice';
import VueWindowSize from 'vue-window-size';
import { i18n } from '@/i18n';

Vue.use(VueCookies)
Vue.use(ToastService);
Vue.use(VueWindowSize);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('PanelMenu', PanelMenu);
Vue.component('Panel', Panel);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('ScrollPanel', ScrollPanel);
Vue.component('Toast', Toast);
Vue.component('Menubar', Menubar);
Vue.component('DataView', DataView);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-cyan/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './registerServiceWorker'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '707231563844-e5cpkqrlt62gncmj6b84of5sml9lp8g9.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

Vue.config.productionTip = false

Vue.$cookies.config('30d')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
