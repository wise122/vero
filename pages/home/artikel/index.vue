<template>
    <div class="mp-news__page">
        <h1>News</h1>
        <span class="mp-border-bottom__news mb-4" style="max-width:14%"></span>
        <b-row>
            <b-col cols="6" v-for="(data, index) in 8" :key="index">
                <NewsSidebarCard/>
            </b-col>
        </b-row>
    </div>
</template>