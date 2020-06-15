import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies'
import en from './en.json'
import az from './az.json'
import tr from './tr.json'
import ru from './ru.json'



export const defaultLocale = 'en'

export const languages = {
    en: en,
    az: az,
    tr: tr,
    ru: ru,
}

// register i18n module
Vue.use(VueI18n);
Vue.use(VueCookies)


Vue.$cookies.config('30d')

let locale = 'en'
const cookieIndexLocale = Vue.$cookies.get('indexLocale');
if (cookieIndexLocale == null) {
    const localeUser = window.navigator.language.substring(0,2);
    if (localeUser in languages){
        locale = localeUser;
    }
    Vue.$cookies.set('indexLocale', locale);
} else {
    if (cookieIndexLocale in languages){
        locale = cookieIndexLocale;
    }
}

const i18n = new VueI18n({
    locale: locale,
    fallbackLocale: locale,
    messages: languages,
    silentTranslationWarn: true
})

const translate = (key: string) => {
    if (!key) {
        return '';
    }
    return i18n.t(key);
};

export { i18n, translate}; //export above method

