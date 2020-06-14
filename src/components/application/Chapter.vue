<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Accordion</h1>
                <p>Accordion groups a collection of contents in tabs.</p>
            </div>
        </div>

        <Breadcrumb :home="home" :model="items" />
        <div class="content-section implementation">

<!--            <Menubar :model="menuItems">-->
<!--                <template #end>-->
<!--                    <InputText placeholder="Search" type="text" />-->
<!--                </template>-->
<!--            </Menubar>-->


            <DataTable :value="cars">
                <Column field="vin" header="Vin"></Column>
                <Column field="year" header="Year"></Column>
                <Column field="brand" header="Brand"></Column>
                <Column field="color" header="Color"></Column>
            </DataTable>

        </div>

    </div>
</template>

<script>
    import CarService from "@/service/CarService";

    export default {
        name: "Chapter",
        data() {
            return {
                cars: null,
                home: {icon: 'pi pi-home', to: '/'},
                items: [
                    {label:'Sureler'},
                    {label:'Ayeler'},
                    {label:'Test', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
                ],
                menuItems: [
                    {
                        label:'Çeviri',
                        items:[
                            {
                                label:'New',
                                icon:'pi pi-fw pi-plus',
                                items:[
                                    {
                                        label:'Bookmark',
                                        icon:'pi pi-fw pi-bookmark'
                                    },
                                    {
                                        label:'Video',
                                        icon:'pi pi-fw pi-video'
                                    },

                                ]
                            },
                            {
                                label:'Delete',
                                icon:'pi pi-fw pi-trash'
                            },
                            {
                                separator:true
                            },
                            {
                                label:'Export',
                                icon:'pi pi-fw pi-external-link'
                            }
                        ]
                    },
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                            {
                                label:'Left',
                                icon:'pi pi-fw pi-align-left'
                            },
                            {
                                label:'Right',
                                icon:'pi pi-fw pi-align-right'
                            },
                            {
                                label:'Center',
                                icon:'pi pi-fw pi-align-center'
                            },
                            {
                                label:'Justify',
                                icon:'pi pi-fw pi-align-justify'
                            },

                        ]
                    },
                    {
                        label:'Users',
                        icon:'pi pi-fw pi-user',
                        items:[
                            {
                                label:'New',
                                icon:'pi pi-fw pi-user-plus',

                            },
                            {
                                label:'Delete',
                                icon:'pi pi-fw pi-user-minus',

                            },
                            {
                                label:'Search',
                                icon:'pi pi-fw pi-users',
                                items:[
                                    {
                                        label:'Filter',
                                        icon:'pi pi-fw pi-filter',
                                        items:[
                                            {
                                                label:'Print',
                                                icon:'pi pi-fw pi-print'
                                            }
                                        ]
                                    },
                                    {
                                        icon:'pi pi-fw pi-bars',
                                        label:'List'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label:'Events',
                        icon:'pi pi-fw pi-calendar',
                        items:[
                            {
                                label:'Edit',
                                icon:'pi pi-fw pi-pencil',
                                items:[
                                    {
                                        label:'Save',
                                        icon:'pi pi-fw pi-calendar-plus'
                                    },
                                    {
                                        label:'Delete',
                                        icon:'pi pi-fw pi-calendar-minus'
                                    },

                                ]
                            },
                            {
                                label:'Archieve',
                                icon:'pi pi-fw pi-calendar-times',
                                items:[
                                    {
                                        label:'Remove',
                                        icon:'pi pi-fw pi-calendar-minus'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label:'Quit',
                        icon:'pi pi-fw pi-power-off'
                    }
                ]
            }
        },
        carService: null,
        created() {
            this.carService = new CarService();
        },
        mounted() {
            this.carService.getCarsSmall().then(data => this.cars = data);
        }
    }
</script>

<style >
</style>
