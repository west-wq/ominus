import { createSSRApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import * as Pinia from 'pinia'
import '@omnius-uni/ui/index.css'
import PiniaInstall from '@omnius-uni/ui/store'
export function createApp() {
  const app = createSSRApp(App)
  app.use(PiniaInstall)
  return {
    app,
    Pinia,
  }
}
