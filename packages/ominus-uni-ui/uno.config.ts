import { defineConfig } from 'unocss'
import { unoCustomPreset, unoTransformer } from './index'
export default defineConfig({
  presets: [unoCustomPreset()],
  transformers: unoTransformer(),
})
