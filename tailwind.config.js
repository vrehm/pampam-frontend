/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

/* eslint-disable prettier/prettier */
/* stylelint-disable */

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
        ]
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                blur: ['AustralSlabBlur-Regular', ...defaultTheme.fontFamily.sans],
                light: ['AustralSlabBlur-Light', ...defaultTheme.fontFamily.sans],
                thin: ['AustralSlabBlur-Thin', ...defaultTheme.fontFamily.sans],

                headings: ['Monthoers', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                gray: {
                    ...defaultTheme.colors.gray,
                    '100': '#f1f2ec',
                    '200': '#e5e6e0',
                    '500': '#787875',
                    '700': '#494a43',
                    '800': '#323329',
                    '900': '#1a1b13',
                },
                green: {
                    ...defaultTheme.colors.green,
                    '400': '#81a074',
                    '800': '#434219',
                },
                orange: {
                    ...defaultTheme.colors.orange,
                    '100': '#dac2b0',
                    '200': '#d2a788',
                    '300': '#cc8f63',
                    '400': '#b67b50',
                    '500': '#b87b4f',
                    '600': '#98633c',
                    '700': '#8e542a',
                },
                yellow: {
                    ...defaultTheme.colors.yellow,
                    // 100 & 200 are alternative grays
                    '100': '#fdfdfd',
                    '200': '#f2f2f2',
                    '500': '#7c5315',
                }
            },
            minHeight: {
                '300': '300px',
                '550': '550px',
            }
        }
        // typography: (theme) => ({
        //     default: {
        //         css: {
        //             fontFamily: theme('fontFamily.light'),
        //         }
        //     }
        // })
    },
    variants: {
        outline: ["focus"]
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography')
    ]
}