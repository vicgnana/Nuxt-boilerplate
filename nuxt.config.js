import { defineNuxtConfig } from '@nuxt/bridge'
import smConfig from "./sm.json"
export default defineNuxtConfig({
  bridge: false, // Temporarily disable bridge integration
  target: 'static',
  generate: {
    fallback: true,
  },
  components:true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */


  plugins: [
    // {
    //   src: "~/plugins/VueAwesomeSwiper.js",
    //   ssr: false
    // }, 
    {
      src:"~/plugins/loco.js",
  
    },
    {
      src:"~/plugins/client.js", 
      mode:'client'
    },
    // {
    //   src:"~/plugins/global-components.js",
    // }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module

    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // '@nuxtjs/prismic',
    'nuxt-gsap-module'
  ],
  gsap: {
    extraPlugins: {
      scrollTo: false,
      scrollTrigger: true,
      cssRule: true,
      draggable: false,
      easel: false,
      motionPath: false,
      pixi: false,
      text: false,
    }
  },
  // prismic: {
  //   endpoint: 'https://davidkeen.cdn.prismic.io/api/v2',
  //   modern:true,
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { SameSite: 'Strict' }],
    ["@nuxtjs/prismic", {
      endpoint: smConfig.apiEndpoint|| "https://davidkeen.cdn.prismic.io/api/v2"
    }], ["nuxt-sm"]
  ],


  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
    /*
    ** You can extend webpack config here
    */
   
    extend (config, ctx) {
       
    }
  }
})
