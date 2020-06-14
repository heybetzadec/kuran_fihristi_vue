import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en.json'
import az from './az.json'



export const defaultLocale = 'en'

export const languages = {
    en: en,
    az: az,
}

// register i18n module
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'az-AZ', //if you need get the browser language use following "window.navigator.language"
    fallbackLocale: 'en',
    messages: {en, az},
    silentTranslationWarn: true
})

const translate = (key: string) => {
    if (!key) {
        return '';
    }
    return i18n.t(key);
};

export { i18n, translate}; //export above method

