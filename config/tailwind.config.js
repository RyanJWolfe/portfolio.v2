const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        display: 'Poppins',
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        'primary-press': 'rgb(var(--color-primary-press) / <alpha-value>)',
      },
      textColor: {
        based: 'rgb(var(--color-text-based) / <alpha-value>)',
      },
      backgroundColor: {
        base: 'rgb(var(--color-bg) / <alpha-value>)',
        nav: 'rgb(var(--color-bg-nav) / <alpha-value>)',
        surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
        'surface-alt': 'rgb(var(--color-bg-surface-alt) / <alpha-value>)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
