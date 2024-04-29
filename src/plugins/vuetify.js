/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#fff',
          secondary: '#b0bec5',
          logotype: '#DA2025',
          hover: '#E73A3F',
          accent: '#8c9eff',
          error: '#b71c1c',
          general: '#161616',
        }
      },
    },
  },
})
