import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/style.css"
import "./styles/responsive.css"

createApp(App).use(router).mount('body')
