<template>
    <div class="layout-wrapper" :class="[{'layout-news-active':newsActive}]">
        <a class="layout-news" href="https://www.primefaces.org/store" target="_blank" tabindex="-1" v-if="newsActive">
            <div class="layout-news-container">
                <img class="layouts-news-text-image" alt="easter" src="../../assets/images/topbar-easter-2020-text.png">
                <img class="layouts-news-mockup-image" alt="easter" src="../../assets/images/topbar-easter-2020-ultima.png">
                <a href="#" class="layout-news-close" @click="hideNews">
                    <i class="pi pi-times"></i>
                </a>
            </div>
        </a>

        <app-topbar @menubutton-click="onMenuButtonClick" @change-theme="changeTheme" :theme="theme" />
        <app-menu :active="sidebarActive" />
        <app-configurator @change-theme="changeTheme" :theme="theme" />
        <div :class="['layout-mask', {'layout-mask-active': sidebarActive}]" @click="onMaskClick"></div>
        <div class="layout-content">
            <router-view/>
            <app-footer />
        </div>
        <Toast />
        <Toast position="topleft" group="tl" />
        <Toast position="bottomleft" group="bl" />
        <Toast position="bottomright" group="br" />
    </div>
</template>

<script>

    import AppConfigurator from '@/AppConfigurator.vue';
    import EventBus from '@/EventBus';
    import AppTopBar from "@/components/application/AppTopBar";
    import AppMenu from "@/components/application/AppMenu";
    import AppFooter from "@/components/application/AppFooter";

    export default {
        name: "Application",
        data() {
            return {
                sidebarActive: false,
                newsActive: false,
                theme: 'saga-blue'
            }
        },
        mounted() {
            if (this.isOutdatedIE()) {
                this.$toast.add({severity: 'warn', summary: 'Limited Functionality', detail: 'Although PrimeVue supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.'});
            }
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    const route = window.location.href.split('/#')[1];
                    if (to.path === route) {
                        window['gtag']('config', 'UA-93461466-1', {
                            'page_path': '/primevue' + to.path
                        });
                    }

                    this.sidebarActive = false;
                    this.$toast.removeAllGroups();
                }
            }
        },
        methods: {
            onMenuButtonClick() {
                this.sidebarActive = !this.sidebarActive;
            },
            onMaskClick() {
                this.sidebarActive = false;
            },
            hideNews() {
                this.newsActive = false;
            },
            changeTheme(event) {
                const themeElement = document.getElementById('theme-link');
                themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, event.theme));
                this.theme = event.theme;

                this.activeMenuIndex = null;

                EventBus.$emit('change-theme', event);

                if (event.dark)
                    document.body.setAttribute('data-darktheme', 'true');
                else
                    document.body.removeAttribute('data-darktheme')

            },
            addClass(element, className) {
                if (!this.hasClass(element, className)) {
                    if (element.classList)
                        element.classList.add(className);
                    else
                        element.className += ' ' + className;
                }
            },
            removeClass(element, className) {
                if (element.classList)
                    element.classList.remove(className);
                else
                    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            },
            hasClass(element, className) {
                if (element.classList)
                    return element.classList.contains(className);
                else
                    return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
            },
            isOutdatedIE() {
                const ua = window.navigator.userAgent;
                return ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0;


            }
        },
        components: {
            'app-topbar': AppTopBar,
            'app-menu': AppMenu,
            'app-footer': AppFooter,
            'app-configurator': AppConfigurator
        },
    }
</script>

<style lang="scss">

    .p-breadcrumb {
        border: 0!important;
        border-bottom: 1px solid #eaeaea!important;
        border-radius: 0!important;
    }

    @import '../../assets/styles/app/app.scss';
</style>

