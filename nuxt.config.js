/* eslint-disable prettier/prettier */
/* stylelint-disable */

require('dotenv').config()

export default {
    /*
     ** Router configuration
     */
    router: {
        middleware: ['password-protect']
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
        // Doc: https://github.com/stephenkr/nuxt-password-protect
        'nuxt-password-protect',
        // Doc: https://github.com/Developmint/nuxt-purgecss
        'nuxt-purgecss',
        // Doc: https://github.com/nuxt-community/svg-module
        // '@nuxtjs/svg', // Incompatible with nuxt optimized images
        // Doc: https://github.com/lovell/sharp
        'sharp',
        // Doc: https://github.com/aceforth/nuxt-optimized-images
        '@aceforth/nuxt-optimized-images',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/moment-module#readme
        '@nuxtjs/moment'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://pwa.nuxtjs.org/setup.html
        '@nuxtjs/pwa',
        // // Doc: https://github.com/geeogi/nuxt-responsive-loader#readme
        // 'nuxt-responsive-loader',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        // https://www.npmjs.com/package/vue-social-sharing
        'vue-social-sharing/nuxt',
        // https://www.npmjs.com/package/@nuxtjs/markdownit
        '@nuxtjs/markdownit'
    ],
    stylelint: {
        ignorePath: '*.js'
    },
    optimizedImages: {
        responsive: {
            adapter: require('responsive-loader/sharp'),
            name: 'img/[name]-[width].[ext]', // use [name] to keep the original filename
            sizes: [320, 640, 768, 1024, 1280], // array of image sizes - adjust to your layout needs
            quality: 85, // 85 is default. Tweak this if you need to
            placeholder: true
        },
        inlineImageLimit: 1000,
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
     ** see https://www.npmjs.com/package/@nuxtjs/moment
     */
    moment: {
        locales: ['fr'],
        defaultLocale: 'fr'
    },
    // [optional] markdownit options
    // See https://github.com/markdown-it/markdown-it
    markdownit: {
        injected: true,
        preset: 'default',
        linkify: true,
        breaks: true,
        use: [
            'markdown-it-div',
            'markdown-it-attrs'
        ]
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/vClickOutside", ssr: false },
        '~/plugins/vue-lazysizes.client.js',
        '~/plugins/vue-placeholders.js',
        '~/plugins/vue-observe-visibility.client.js'
    ],
    /*
     * See https://purgecss.com/guides/nuxt.html#nuxt-js-plugin
     * Modified based on tailwindUI settings: https://tailwindui.com/documentation#update-your-purgecss-configuration
     */
    purgeCSS: {
        mode: 'postcss',
        enabled: !!(process.env.NODE_ENV === 'production'),
        // paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js'],
        styleExtensions: ['.css'],
        whitelistPatterns: [
            /custom$/,
            /slick/
        ],
        whitelist: [
            'lazyload',
            'lazyloaded',
            'body',
            'html',
            'nuxt-progress',
            'custom-prev-arrow',
            'custom-next-arrow'
        ],
        // extractors: () => [{
        //     extractor: class {
        //         static extract(content) {
        //             return (content.match(/[\w-/.:]+(?<!:)/g || []).concat(content.match(/[\w-/.:]+(?<!:)/g) || []))
        //         }
        //     },
        //     extensions: ['html', 'vue', 'js']
        // }],
        // extractors: () => [{
        //     extractor: (content) => (content || '').match(/[\w-/.:]+(?<!:)/g) || [],
        //     extensions: ['html', 'vue', 'js']
        // }]
        extractors: [{
            // replace original config with that required by tailwindUI
            // extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
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