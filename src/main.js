import { createApp } from 'vue'

//createApp(App).mount('#app')
import { router } from './router';
import App from './App.vue';
createApp(App).use(router).mount('#app')
