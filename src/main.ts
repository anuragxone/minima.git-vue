import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import LoginForm from '@/components/LoginForm.vue'
import TypewriterText from './components/TypewriterText.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
