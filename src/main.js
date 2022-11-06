import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import 'aos/dist/aos.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Aos from 'aos'

const app=createApp(App);
app.use(router)
app.mount('#app')
app.Aos = new Aos.init({  once: "false"});
