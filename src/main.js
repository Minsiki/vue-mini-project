import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import mixins from './mixins';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App).use(router);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');

window.Kakao.init("b0e0aa848edf4bb18e08b2032f4b311a");
createApp(App).use(router).mount('#app')
