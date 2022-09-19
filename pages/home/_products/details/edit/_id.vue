<template>
    <ProductForm 
        v-if="payload"
        :edit="true"
        :payload="payload"
    />
</template>

<script>
    export default {
        data() {
            return {
                payload:null,
            }
        },
        async mounted() {
            let fetchProduct = await this.$axios.get(`/products/detail/${this.$route.params.id}`)
            this.payload = fetchProduct.data.data[0]
            this.payload.katalog = this.payload.katalog && this.payload.katalog.split(',')
            this.payload.varian = this.payload.varian.split(',')
        }
    }
</script>

<style scoped>

</style>