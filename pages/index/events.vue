<template>
    <div class="container" style="min-height: 100vh;">
        <div class="row">
            <div class="col-12 text-center">
                <h1>EVENTS</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-6">
                        <div class="btn btn-block rounded-pill" :class="{ 'btn-primary' : filterTgl === true, 'btn-light' : filterTgl === false }" @click="filterEvents(false)">AKAN DATANG</div>
                    </div>
                    <div class="col-6">
                        <div class="btn btn-block rounded-pill" :class="{ 'btn-primary' : filterTgl === false, 'btn-light' : filterTgl === true }" @click="filterEvents(true)">TERLEWATKAN</div>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-4 p-3" v-for="event in listEvents" :key="event.id_event">
                <nuxt-link :to="`/event/${event.id_event}`">
                    <b-card 
                        bg-variant="light" 
                        footer-bg-variant="transparent"
                        footer-border-variant="transparent"
                        class="h-100 shadow rounded-xl"
                    >
                        <h3>{{ event.event_name }}</h3>
                        <p class="m-0"><b-icon icon="calendar2-check-fill" class="mr-3"></b-icon>{{ $formatIDDate(event.starting_date) }}</p>
                        <p class="m-0"><b-icon icon="geo-alt-fill" class="mr-3"></b-icon>{{ event.location }}</p>
                        <template #footer>
                            <p class="text-right m-0">> Details</p>
                        </template>
                    </b-card>
                </nuxt-link>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filterTgl:false,
                listEvents: [],
                defaultListEvents: [],
            }
        },
        methods: {
            filterEvents(terlewatkan) {
                this.filterTgl = !this.filterTgl
                if(terlewatkan) this.listEvents = this.defaultListEvents.filter(row => new Date(row.starting_date) <= Date.now())
                else this.listEvents = this.defaultListEvents.filter(row => new Date(row.starting_date) >= Date.now())
            }
        },
        async mounted() {
            let fetchEvents = await this.$axios.get(`/events`)
            this.listEvents = fetchEvents.data.data
            this.defaultListEvents = fetchEvents.data.data
            this.filterEvents(false)
        },
    }
</script>

<style scoped>

</style>