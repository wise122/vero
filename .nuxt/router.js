import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17052c8d = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _6d3d46da = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _0f2b0f8e = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _a83598de = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _0f8ff724 = () => interopDefault(import('../pages/home/artikel/index.vue' /* webpackChunkName: "pages/home/artikel/index" */))
const _3a2c93ca = () => interopDefault(import('../pages/home/catalog/index.vue' /* webpackChunkName: "pages/home/catalog/index" */))
const _3adf1a2c = () => interopDefault(import('../pages/home/events.vue' /* webpackChunkName: "pages/home/events" */))
const _54f8f195 = () => interopDefault(import('../pages/home/faq.vue' /* webpackChunkName: "pages/home/faq" */))
const _0c23fb38 = () => interopDefault(import('../pages/home/inquiries.vue' /* webpackChunkName: "pages/home/inquiries" */))
const _282e6eb5 = () => interopDefault(import('../pages/home/material-inquiry/index.vue' /* webpackChunkName: "pages/home/material-inquiry/index" */))
const _6ab049e4 = () => interopDefault(import('../pages/home/news.vue' /* webpackChunkName: "pages/home/news" */))
const _1fbc1600 = () => interopDefault(import('../pages/home/partnerships.vue' /* webpackChunkName: "pages/home/partnerships" */))
const _40dea328 = () => interopDefault(import('../pages/home/profile.vue' /* webpackChunkName: "pages/home/profile" */))
const _98edfdfc = () => interopDefault(import('../pages/home/profile-old.vue' /* webpackChunkName: "pages/home/profile-old" */))
const _53abe569 = () => interopDefault(import('../pages/home/showroom.vue' /* webpackChunkName: "pages/home/showroom" */))
const _69466a4a = () => interopDefault(import('../pages/home/verify.vue' /* webpackChunkName: "pages/home/verify" */))
const _f9f7f154 = () => interopDefault(import('../pages/home/wishlist.vue' /* webpackChunkName: "pages/home/wishlist" */))
const _04e18a91 = () => interopDefault(import('../pages/home/material-inquiry/principal.vue' /* webpackChunkName: "pages/home/material-inquiry/principal" */))
const _35384a56 = () => interopDefault(import('../pages/home/artikel/_id.vue' /* webpackChunkName: "pages/home/artikel/_id" */))
const _0e8f5af8 = () => interopDefault(import('../pages/home/event/_id.vue' /* webpackChunkName: "pages/home/event/_id" */))
const _71cfcfae = () => interopDefault(import('../pages/home/partnership/_id.vue' /* webpackChunkName: "pages/home/partnership/_id" */))
const _1dce9535 = () => interopDefault(import('../pages/home/_products/details.vue' /* webpackChunkName: "pages/home/_products/details" */))
const _5d8eb002 = () => interopDefault(import('../pages/home/_products/details/edit/_id.vue' /* webpackChunkName: "pages/home/_products/details/edit/_id" */))
const _50274060 = () => interopDefault(import('../pages/home/_products/details/_id.vue' /* webpackChunkName: "pages/home/_products/details/_id" */))
const _17c86e6c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _d1c0e698 = () => interopDefault(import('../pages/maintenance.vue' /* webpackChunkName: "pages/maintenance" */))
const _09c92c71 = () => interopDefault(import('../pages/quickregister.vue' /* webpackChunkName: "pages/quickregister" */))
const _28c7b85c = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _2a7425b3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4a674c14 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _dee3cdb6 = () => interopDefault(import('../pages/index/events.vue' /* webpackChunkName: "pages/index/events" */))
const _826f7a42 = () => interopDefault(import('../pages/index/news.vue' /* webpackChunkName: "pages/index/news" */))
const _1774e3fb = () => interopDefault(import('../pages/index/partnerships.vue' /* webpackChunkName: "pages/index/partnerships" */))
const _b644f82c = () => interopDefault(import('../pages/index/pricing.vue' /* webpackChunkName: "pages/index/pricing" */))
const _78d8e8e4 = () => interopDefault(import('../pages/index/showroom.vue' /* webpackChunkName: "pages/index/showroom" */))
const _668050fb = () => interopDefault(import('../pages/index/artikel/_id.vue' /* webpackChunkName: "pages/index/artikel/_id" */))
const _792bbe69 = () => interopDefault(import('../pages/index/event/_id.vue' /* webpackChunkName: "pages/index/event/_id" */))
const _1cb9fbd3 = () => interopDefault(import('../pages/index/partnership/_id.vue' /* webpackChunkName: "pages/index/partnership/_id" */))
const _65d3c0be = () => interopDefault(import('../pages/index/product/_id.vue' /* webpackChunkName: "pages/index/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _17052c8d,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _6d3d46da,
    name: "contact-us"
  }, {
    path: "/home",
    component: _0f2b0f8e,
    children: [{
      path: "",
      component: _a83598de,
      name: "home"
    }, {
      path: "artikel",
      component: _0f8ff724,
      name: "home-artikel"
    }, {
      path: "catalog",
      component: _3a2c93ca,
      name: "home-catalog"
    }, {
      path: "events",
      component: _3adf1a2c,
      name: "home-events"
    }, {
      path: "faq",
      component: _54f8f195,
      name: "home-faq"
    }, {
      path: "inquiries",
      component: _0c23fb38,
      name: "home-inquiries"
    }, {
      path: "material-inquiry",
      component: _282e6eb5,
      name: "home-material-inquiry"
    }, {
      path: "news",
      component: _6ab049e4,
      name: "home-news"
    }, {
      path: "partnerships",
      component: _1fbc1600,
      name: "home-partnerships"
    }, {
      path: "profile",
      component: _40dea328,
      name: "home-profile"
    }, {
      path: "profile-old",
      component: _98edfdfc,
      name: "home-profile-old"
    }, {
      path: "showroom",
      component: _53abe569,
      name: "home-showroom"
    }, {
      path: "verify",
      component: _69466a4a,
      name: "home-verify"
    }, {
      path: "wishlist",
      component: _f9f7f154,
      name: "home-wishlist"
    }, {
      path: "material-inquiry/principal",
      component: _04e18a91,
      name: "home-material-inquiry-principal"
    }, {
      path: "artikel/:id",
      component: _35384a56,
      name: "home-artikel-id"
    }, {
      path: "event/:id?",
      component: _0e8f5af8,
      name: "home-event-id"
    }, {
      path: "partnership/:id?",
      component: _71cfcfae,
      name: "home-partnership-id"
    }, {
      path: ":products/details",
      component: _1dce9535,
      name: "home-products-details",
      children: [{
        path: "edit/:id?",
        component: _5d8eb002,
        name: "home-products-details-edit-id"
      }, {
        path: ":id?",
        component: _50274060,
        name: "home-products-details-id"
      }]
    }]
  }, {
    path: "/login",
    component: _17c86e6c,
    name: "login"
  }, {
    path: "/maintenance",
    component: _d1c0e698,
    name: "maintenance"
  }, {
    path: "/quickregister",
    component: _09c92c71,
    name: "quickregister"
  }, {
    path: "/register",
    component: _28c7b85c,
    name: "register"
  }, {
    path: "/",
    component: _2a7425b3,
    children: [{
      path: "",
      component: _4a674c14,
      name: "index"
    }, {
      path: "events",
      component: _dee3cdb6,
      name: "index-events"
    }, {
      path: "news",
      component: _826f7a42,
      name: "index-news"
    }, {
      path: "partnerships",
      component: _1774e3fb,
      name: "index-partnerships"
    }, {
      path: "pricing",
      component: _b644f82c,
      name: "index-pricing"
    }, {
      path: "showroom",
      component: _78d8e8e4,
      name: "index-showroom"
    }, {
      path: "artikel/:id?",
      component: _668050fb,
      name: "index-artikel-id"
    }, {
      path: "event/:id?",
      component: _792bbe69,
      name: "index-event-id"
    }, {
      path: "partnership/:id?",
      component: _1cb9fbd3,
      name: "index-partnership-id"
    }, {
      path: "product/:id?",
      component: _65d3c0be,
      name: "index-product-id"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
