import * as Pinia from 'pinia'
const PiniaInstall = {
  install: (app) => {
    const pinia = app.config.globalProperties.$pinia || null
    if (!pinia) {
      const pinia = Pinia.createPinia()
      app.use(pinia)
    }
  },
}

export default PiniaInstall
