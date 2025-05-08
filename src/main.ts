import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { PlusIcon } from '@heroicons/vue/24/outline';  // Correct import for a specific icon
import "./index.css";

const app = createApp(App);

// Register the Heroicons as components
app.component('PlusIcon', PlusIcon);

app.use(router);
app.mount("#app");
