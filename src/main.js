import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './styles/common.scss'
import { imgLazy } from './directives/imgLazy'
import { componentsPlugin } from './components/ToPlugin'
const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(imgLazy)
app.use(componentsPlugin)
app.mount('#app')
