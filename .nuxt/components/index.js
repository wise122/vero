export { default as ArtikelThumbnail } from '../../components/ArtikelThumbnail.vue'
export { default as HomeFooter } from '../../components/HomeFooter.vue'
export { default as MyProducts } from '../../components/MyProducts.vue'
export { default as NavBarTop } from '../../components/NavBarTop.vue'
export { default as ProductDetail } from '../../components/ProductDetail.vue'
export { default as ProductForm } from '../../components/ProductForm.vue'
export { default as ProductThumbnail } from '../../components/ProductThumbnail.vue'
export { default as ShowroomCard } from '../../components/ShowroomCard.vue'
export { default as AuthLoginModal } from '../../components/auth/LoginModal.vue'
export { default as CarouselHomepageCarousel } from '../../components/carousel/homepage-carousel.vue'
export { default as Event } from '../../components/event/Event.vue'
export { default as MenuItem } from '../../components/menu/MenuItem.vue'
export { default as NewsArticleCard } from '../../components/news/ArticleCard.vue'
export { default as NewsSection } from '../../components/news/NewsSection.vue'
export { default as NewsSidebarCard } from '../../components/news/NewsSidebarCard.vue'
export { default as Principal } from '../../components/principal/Principal.vue'
export { default as Showroom } from '../../components/showroom/Showroom.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
