/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import '@/assets/styles/reset.css'
import '@/assets/styles/main.css'

import { createApp } from 'vue'
import VueSplide from '@splidejs/vue-splide';

import router from './routers/router';

const app = createApp(App)
app.use( VueSplide );
app.use(router);

registerPlugins(app)

app.mount('#app')
