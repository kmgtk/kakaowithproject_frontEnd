import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import { router } from './router/router';
import { store } from "./store/store";
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
import  "bootstrap/dist/js/bootstrap.js"


