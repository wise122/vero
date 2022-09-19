<template>
    <div class="container h-100 py-5">
        <div class="row mb-3">
            <div class="col-12">
                <nuxt-link to="/events"><b-icon icon="arrow-left-short"></b-icon> Kembali</nuxt-link>
            </div>
        </div>
        <div class="row">
            <!-- <div class="col-md-3">
                Event contents
                <p v-for="(l,idx) in links" :key="idx"><b-link :href="'#'+l">{{ l }}</b-link></p>
            </div> -->
            <div class="col-md-9">
                <div class="rounded-xl p-4">
                    <h3>{{ eventData.event_name }}</h3>
                    <div v-html="eventData.body && $md.render(eventData.body)" class="text-break"></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="rounded-xl p-4">
                    <div class="row mb-2">
                        <div class="col-12 font-weight-bold">Date & Time</div>
                        <div class="col-12">{{$formatIDDate(eventData.starting_date)}}</div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 font-weight-bold">Location</div>
                        <div class="col-12">{{ eventData.location }}</div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 font-weight-bold">Event By</div>
                        <div class="col-12">{{ eventData.author }}</div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 font-weight-bold">Admission</div>
                        <div class="col-12 text-success">{{ eventData.admission }}</div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12">
                            <nuxt-link to="/login" class="btn btn-primary rounded-pill btn-sm btn-block">RSVP now</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head:{
            script: [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'  
            }]  
        },
        data() {
            return {
                baseBackOfficeUrl:process.env.BASE_BACKOFFICE_URL,
                eventData: {},
                links: [],
                loading: false,
                valid: true,
                msg: '',
            }
        },
        methods: {

        },
        async mounted() {
            try {
                let fetchEvents = await this.$axios.get(`/events/data/${this.$route.params.id}`)
                this.eventData = fetchEvents.data.data[0]
            } catch (error) {
                console.log(error)
            }
            // let lines = this.eventData.body.split('\n')
            // lines.forEach(line => {
            //     if(line.trim().match(/^(## )/)) {
            //         this.links.push(line.replace('##','').trim())
            //     }
            // })
        }
    }
</script>

<style scoped>

</style>