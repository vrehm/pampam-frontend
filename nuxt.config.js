/* eslint-disable prettier/prettier */

if (process.env.MODE === 'development' || process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

export default {
    /*
     ** Router configuration
     */
    router: {
        middleware: ['password-protect'],
        scrollBehavior: async(to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = (hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
                    })
            }

            if (to.hash) {
                const el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        }
    },
    server: {
        host: process.env.MODE === 'production' ? '0.0.0.0' : 'localhost', // default: localhost
        port: 3000 // default: 3000
    },
    env: {
        assetsBaseUrl: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ? '' : 'http://localhost:1337'
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
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        // Doc: https://github.com/Developmint/nuxt-webfontloader
        'nuxt-webfontloader',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        // Doc: https://github.com/stephenkr/nuxt-password-protect
        'nuxt-password-protect',
        // Doc: https://github.com/Developmint/nuxt-purgecss
        'nuxt-purgecss',
        // Doc: https://github.com/nuxt-community/svg-module
        // Incompatible with nuxt optimized images
        // '@nuxtjs/svg',
        // Doc: https://github.com/aceforth/nuxt-optimized-images
        '@aceforth/nuxt-optimized-images'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://pwa.nuxtjs.org/setup.html
        '@nuxtjs/pwa'
    ],
    optimizedImages: {
        inlineImageLimit: -1,
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        defaultImageLoader: 'img-loader',
        mozjpeg: {
            quality: 85
        },
        optipng: false,
        pngquant: {
            speed: 7,
            quality: [0.65, 0.8]
        },
        webp: {
            quality: 85
        }
    },
    passwordProtect: {
        formPath: '/password',
        password: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ? process.env.PASSWORD : 'hello-world',
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
        baseURL: process.env.MODE === 'production' || process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : 'http://localhost:1337'
    },
    /*
     * See https://github.com/nuxt-community/tailwindcss-module#configuration
     */
    tailwindcss: {
        configPath: '~/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: false
    },
    webfontloader: {
        google: {
            families: ['Inter&display=swap']
        }
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/vClickOutside", ssr: false },
        '~/plugins/vue-lazysizes.client.js'
    ],
    /*
     * See https://purgecss.com/guides/nuxt.html#nuxt-js-plugin
     * Modified based on tailwindUI settings: https://tailwindui.com/documentation#update-your-purgecss-configuration
     */
    purgeCSS: {
        mode: 'postcss',
        enabled: !!(process.env.NODE_ENV === 'production'),
        paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js'],
        styleExtensions: ['.css'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        // extractors: () => [{
        //     extractor: class {
        //         static extract(content) {
        //             return (content.match(/[\w-/.:]+(?<!:)/g || []).concat(content.match(/[\w-/.:]+(?<!:)/g) || []))
        //         }
        //     },
        //     extensions: ['html', 'vue', 'js']
        // }],
        extractors: () => [{
            extractor: (content) => (content || '').match(/[\w-/.:]+(?<!:)/g) || [],
            extensions: ['html', 'vue', 'js']
        }]
    },
    /*
     ** Build configuration
     */
    build: {
        loaders: {
            vue: {
                transformAssetUrls: {
                    img: ['data-src', 'src'],
                    source: ['data-srcset', 'srcset']
                }
            }
        },
        postcss: {
            preset: {
                features: {
                    // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
                    'focus-within-pseudo-class': false
                }
            }
        }
    }
}