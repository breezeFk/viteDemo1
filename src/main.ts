import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import buttona from './components/buttona.vue'
console.log();

const app = createApp(App)
app.component('buttona', buttona)  // 正确的注册方式
app.mount('#app')
