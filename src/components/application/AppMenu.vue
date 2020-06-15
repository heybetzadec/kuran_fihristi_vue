<template>
    <div :class="['layout-sidebar', {'active': active}]">
        <div class="layout-menu">

            <PanelMenu :model="items" />

        </div>
    </div>
</template>

<script>
    import {i18n} from "@/i18n";

    export default {
        name: "AppMenu",
        props: {
            active: Boolean
        },
        data() {
            return {
                activeSubmenus: {},
                items: [
                    {
                        label: 'Ana Sayfa',
                        icon:'pi pi-fw pi-home',
                        class: 'active-item',
                        command: () => {
                            this.goToRoute('/');
                        }
                    },
                    {
                        label: 'Sureler',
                        icon:'pi pi-fw pi-list',
                        command: () => {
                            this.goToRoute('/'+i18n.locale+'/chapter');
                        }
                    },
                    {
                        label: 'Sözlük',
                        icon:'pi pi-fw pi-tags',
                        command: () => {
                            this.goToRoute('/word');
                        }
                    },
                    {
                        label: 'Konular',
                        icon:'pi pi-fw pi-inbox',
                        command: () => {
                            this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                        }
                    },
                    {
                        label: 'Allahın İsimleri',
                        icon:'pi pi-fw pi-file-o',
                        command: () => {
                            this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                        }
                    },
                    {
                        label: 'Keşfet',
                        // icon:'pi pi-fw pi-compass',
                        items: [
                            {
                                label: 'Bilim',
                                items: [
                                    {
                                        label: 'Hayvanlar',
                                    },
                                    {
                                        label: 'İnsan Vücudu',
                                    }
                                ]
                            },
                            {
                                label: 'Tarih',
                                items: [
                                    {
                                        label: 'Atatürk',
                                    },
                                    {
                                        label: 'Türk Ordusu',
                                    }
                                ]
                            },
                            {
                                label: 'Felsefe',

                            },
                        ]
                    },
                ],
            }
        },
        methods: {
            goToRoute(path){
                if (this.$route.path !== path)
                    this.$router.push({ path: path })
            },
            toggleSubmenu(event, name) {
                this.activeSubmenus[name] = !this.activeSubmenus[name];
                this.activeSubmenus = {...this.activeSubmenus};
                event.preventDefault();
            },
        }
    }
</script>


<style  lang="scss">
    .layout-sidebar .layout-menu > div  {
        padding: 0!important;
    }
    .layout-sidebar .layout-menu > div a {
        padding: 0.8rem 0.4em!important;
        border-radius: 0!important;
    }
    .p-panelmenu .p-panelmenu-header > a {
        border: 0!important;
        border-radius: 0!important;
        font-weight: 500!important;
        border-bottom: 1px solid #e0e0e0 !important;
    }
    .active-item{
        background-color: #2196F3!important;
    }
</style>
