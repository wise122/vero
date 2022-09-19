<template>
    <div class="mp-catalog">
        <div class="container">
            <b-row>
                <b-col cols="4">
                    <div class="mp-catalog__filter mp-box-shadow mb-4">
                        <b-input-group class="mp-search__form mt-3">    
                            <b-form-input
                                v-model="categorySearch"
                                placeholder="search"
                                class="rounded-pill border border-dark"
                                debounce="200"
                            ></b-form-input>
                            <template #append>
                                <b-icon icon="search"></b-icon>
                            </template>
                        </b-input-group>
                        <div class="mp-list-category mt-4">
                            <div class="mp-list-category__level-1" v-b-toggle="'collapse-'+1">
                                <span> > Category 1</span>
                                <b-collapse id="collapse-1" visible class="mp-list-category__level-2 mt-2">
                                    <p> > Sub-category 1</p>
                                    <p> > Sub-category 2</p>
                                    <p> > Sub-category 3</p>
                                </b-collapse>
                            </div>
                            <div class="mp-list-category__level-1" v-b-toggle="'collapse-'+2">
                                <span> > Category 2</span>
                                <b-collapse id="collapse-2" class="mp-list-category__level-2 mt-2">
                                    <p> > Sub-category 1</p>
                                    <p> > Sub-category 2</p>
                                    <p> > Sub-category 3</p>
                                </b-collapse>
                            </div>
                            <div class="mp-list-category__level-1" v-b-toggle="'collapse-'+3">
                                <span> > Category 3</span>
                                <b-collapse id="collapse-3" class="mp-list-category__level-2 mt-2">
                                    <p> > Sub-category 1</p>
                                    <p> > Sub-category 2</p>
                                    <p> > Sub-category 3</p>
                                </b-collapse>
                            </div>
                        </div>
                    </div>
                    <div class="mp-catalog__ads">
                        <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
                    </div>
                </b-col>
                <b-col cols="8">
                    <div class="mp-catalog__product-list-carousel">
                        <b-carousel 
                        indicators
                        controls
                        class="mp-carousel__product"
                        >
                        <b-carousel-slide class="mp-slider__product" v-for="(slide, i) in slides" :key="i">
                            <template v-slot:img>
                                <b-row>
                                    <b-col cols="3" class="my-4" style="cursor: pointer" v-for="(imgsrc, index) in slide" :key="index">
                                        <nuxt-link to="/">
                                           <b-card :img-src="imgsrc" img-top no-body>
                                            <b-card-body>
                                                <b-card-title>Card Title</b-card-title>
                                                    <b-card-text>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </b-card-text>
                                                </b-card-body>
                                            </b-card>
                                        </nuxt-link>
                                    </b-col>
                                </b-row>
                            </template>
                        </b-carousel-slide>
                        </b-carousel>
                    </div>
                    <div class="mp-catalog__category">

                    </div>
                    <div class="mp-catalog__product-list">

                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                categorySearch: "",
                visible: false,
                index: 5,
                slides: [
                    [
                        "https://picsum.photos/1024/480/?image=45", 
                        "https://picsum.photos/1024/480/?image=40",
                        "https://picsum.photos/1024/480/?image=47",
                        "https://picsum.photos/1024/480/?image=47",
                    ],
                    [
                        "https://picsum.photos/1024/480/?image=48", 
                        "https://picsum.photos/1024/480/?image=39",
                        "https://picsum.photos/1024/480/?image=55",
                        "https://picsum.photos/1024/480/?image=47",
                    ],
                    [
                        "https://picsum.photos/1024/480/?image=51", 
                        "https://picsum.photos/1024/480/?image=52",
                        "https://picsum.photos/1024/480/?image=53",
                        "https://picsum.photos/1024/480/?image=47",
                    ]
                ],

                listCategory:[
                    [
                        "sub-category 1",
                        "sub-category 2",
                        "sub-category 3"
                    ],
                    [
                        "sub-category 1",
                        "sub-category 2",
                        "sub-category 3"
                    ],
                    [
                        "sub-category 1",
                        "sub-category 2",
                        "sub-category 3"
                    ]
                ]
            }
        }
    }
</script>