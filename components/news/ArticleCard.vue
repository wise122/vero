<template>
<a :href="`/home/artikel/${news.id_artikel}`" style="text-decoration: unset;" class="mp-link__redirect">
    <div class="mp-news-card">
        <b-card :title="news.title">
            <!-- <img src="/no-image-placeholder.png" alt="image news" class="w-100 mb-3 mp-border-radius mp-image-news"> -->
            <b-card-text>
                <div v-html="news.body && $md.render(news.body)"></div>
                <!-- <p class="mp-paragraf"> -->
                    <!-- {{news.body}} <a href="#" class="card-link">read more...</a> -->
                <!-- </p> -->
            </b-card-text>
        </b-card>
    </div>
</a>
</template>
<script>
export default {
    name:"ArticleCard",
    props:{
        news:{
            default:() => {}
        }
    },
}
</script>