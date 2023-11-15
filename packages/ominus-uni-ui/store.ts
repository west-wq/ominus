import * as Pinia from 'pinia'
import type { App } from 'vue'

const PiniaInstall = {
  install: (app: App) => {
    const pinia = app.config.globalProperties.$pinia || null
    if (!pinia) {
      const pinia = Pinia.createPinia()
      app.use(pinia)
    }
  },
}

export default PiniaInstall
