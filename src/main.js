import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router/index'
import Vant from 'vant';
import { routerPlugin } from '../version.js'

let app = createApp(App)
app.use(router)
app.use(Vant)
let versionPlugin = routerPlugin(router)
app.use(versionPlugin, router)
app.mount('#app')
