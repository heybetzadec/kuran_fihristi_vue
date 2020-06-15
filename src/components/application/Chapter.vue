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
