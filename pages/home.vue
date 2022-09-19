<template>
    <div style="min-height: 100vh;">
        <div :class="statusFullpage ? `` : `container`" :style="statusFullpage ? `` : `padding-top: 200px; padding-bottom: 150px`">
            <NuxtChild @fullpage="fullpage" />
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        data(){
            return{
                statusFullpage: false,
            }
        },
        methods:{
            fullpage(value){
                this.statusFullpage = value;
            }
        }
    }
</script>

<style scoped>

</style>