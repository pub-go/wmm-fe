import 'normalize.css'

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import { gettext } from './i18n'
import { router } from './router'
import './style.css'


createApp(App)
    .use(router)
    .use(gettext)
    .mount('#app')
