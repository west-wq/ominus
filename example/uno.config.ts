// uno.config.ts
import { defineConfig } from 'unocss'
import { unoCustomPreset, unoTransformer } from 'omnius-ui-uni'
export default defineConfig({
  presets: [unoCustomPreset],
  transformers: unoTransformer(),
})
