import { createApp, defineComponent, type Component } from "vue";
import App from "./App.vue";
import router from "./router";
import * as icons from "lucide-vue-next";
import "./index.css";

const app = createApp(App);

// Only register actual icon components
for (const [name, component] of Object.entries(icons)) {
  if (typeof component === "object" || typeof component === "function") {
    app.component(name, component as Component);
  }
}

app.use(router);
app.mount("#app");
