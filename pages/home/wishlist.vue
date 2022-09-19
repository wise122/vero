<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3>My Saved Materials</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3" v-for="w in wishlist" :key="w.id_produk">
                <nuxt-link :to="`/home/products/details/${w.id_produk}`">
                    <ProductThumbnail 
                        :data="w"
                    />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                wishlist:[],
            }
        },
        async mounted() {
            let wishlistData = await this.$axios.get(`/wishlist`, { params:{}, headers: { 'auth-token': this.$cookies.get('token') } })
            this.wishlist = wishlistData.data.data
            this.wishlist.forEach(row => {
                row.katalog = row.katalog.split(',')
            })
            console.log(this.wishlist)
        }
    }
</script>

<style scoped>

</style>