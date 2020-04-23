/* eslint-disable prettier/prettier */
require('dotenv').config()

export default {
    router: {
        middleware: ['password-protect']
    },
    server: {
        port: 3000, // par défaut: 3000
    },
    env: {
        assetsBaseUrl: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ?
            '' : 'http://localhost:1337'
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/dotenv',
        'nuxt-password-protect'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        'nuxt-password-protect'
    ],
    passwordProtect: {
        formPath: '/password',
        password: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ?
            process.env.PASSWORD : 'hello-world',
        tokenSeed: 101010,
        queryString: '_pw',
        cookieName: '_password',
        cookie: {
            prefix: '',
            expires: 5
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ?
            process.env.BACKEND_URL : 'http://localhost:1337'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}