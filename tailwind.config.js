/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

/* eslint-disable prettier/prettier */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js'
            // // Server output
            // '.nuxt/**/*.html',
            // '.nuxt/**/*.vue',
            // '.nuxt/**/*.js',
            // // SPA output
            // 'dist/**/*.html',
            // 'dist/**/*.js'
        ],
        options: {
            whitelist: [
                'lazyload',
                'lazyloaded',
                'body',
                'html',
                'nuxt-progress'
            ]
        }
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            },
            minHeight: {
                '300': '300px',
                '550': '550px',
            }
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')]
}