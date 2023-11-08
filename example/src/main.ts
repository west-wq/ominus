import { createSSRApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import * as Pinia from "pinia";
import "omnius-ui-uni/index.css";
import PiniaInstall from "omnius-ui-uni/store";
export function createApp() {
  const app = createSSRApp(App);
  app.use(PiniaInstall);
  return {
    app,
    Pinia,
  };
}
