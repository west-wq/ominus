// uno.config.ts
import { defineConfig } from 'unocss'
import { unoCustomPreset, unoTransformer } from '@omnius-uni/ui'
export default defineConfig({
  presets: [unoCustomPreset],
  transformers: unoTransformer(),
})
