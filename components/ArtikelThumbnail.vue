<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <h3>{{ data.title }}</h3>
                </div>
                <div class="col-12">
                    <p class="text-secondary m-0">By {{ data.author }}</p>
                    <p>{{ $formatIDDate(data.timestamp) }}</p>
                    <b-badge>{{ data.category }}</b-badge>
                    <p class="text-break text-truncate mt-3" style="min-width: 200px;">{{ data.body.replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>,\/\\\?-_]/g, '') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["data"],
        methods: {

        }
    }
</script>

<style scoped>
.text-truncate-container p {
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>