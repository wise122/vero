<template>
    <div class="row rounded-xl h-100 mx-1 mb-2">
        <div class="col-12 p-0">
            <div class="position-absolute" style="top: 20px; right: 20px;">
                <b-badge variant="primary" class="p-2">{{ data.penempatan }}</b-badge>
            </div>
            <p class="text-center" style="min-height: 330px;">
                <b-img :src="`${baseUrl}/products/${data.katalog[0]}?t=${new Date().getTime()}`" fluid-grow class="shadow w-100 border-0" style="border-radius: 30px 30px 0px 0px;"></b-img>
            </p>
        </div>
        <div class="col-12">
            <b>{{ data.title }}</b>
            <p class="text-secondary">{{ data.tipe }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:["data"],
        data() {
            return {
                baseUrl:process.env.BASE_FTP_URL,
            }
        }
    }
</script>

<style scoped>

</style>