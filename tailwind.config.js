/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: 'tw-',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      // See https://tailwindui.com/documentation#configuring-sidebar-breakpoints
      // Turning this off for now. This may be buggy as it makes the hero sections like the "with wide angled image on right" look funky
      // https://tailwindui.com/components/marketing/sections/heroes
      // layout: 'sidebar',
    })
  ]
}
