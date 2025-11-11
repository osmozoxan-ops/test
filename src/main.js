import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router' // Импортируем роутер

createApp(App).use(router).mount('#app') // Подключаем роутер
