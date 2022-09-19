<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <ShowroomCard 
                    v-for="(sh,kota) in showroomData" :key="kota"
                    :data="sh"
                    :kota="kota"
                />
            </div>
            <div class="col-md-2 border"></div>
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

<style scoped>

</style>