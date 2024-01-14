import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n';
import progressBar from './plugins/progress-bar';

const app = createApp(App);

// Use plugins
app.use(createPinia());
app.use(router);
app.use(i18n);

// Configure and use progress bar plugin
progressBar(router);

// Mount the app to the specified element
app.mount('#app');
