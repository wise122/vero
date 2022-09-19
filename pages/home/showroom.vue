<template>
    <div class="container">
        <div class="row mb-3">
            <div class="col-md-10">
                <ShowroomCard 
                    v-for="(sh,kota) in showroomData" :key="kota"
                    :data="sh"
                    :kota="kota"
                />
            </div>
            <div class="col-md-2">
                <div class="rounded-xl p-4 h-100"></div>
            </div>
        </div>
        <div class="row pb-5">
            <div class="col-md-10">
                <div class="rounded-xl p-4" style="height: 200px;"></div>
            </div>
            <div class="col-md-2">
                <div class="rounded-xl p-4" style="height: 200px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showroomData:null,
            }
        },
        methods: {
            
        },
        async mounted() {
            let fetchShowrooms = await this.$axios.get(`/showrooms`)
            this.showroomData = fetchShowrooms.data.data
            for (const key in this.showroomData) {
                this.showroomData[key] = this.showroomData[key].filter(row => row.status != 0)
            }
        }
    }
</script>