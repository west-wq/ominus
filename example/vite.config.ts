import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import resolver from 'omnius-ui-uni/resolve'
import nested from 'postcss-nested'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'uni-app',
        {
          zod: ['z'],
        },
      ],
      dirs: ['src/utils'],
      dts: '.types/auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      dts: '.types/components.d.ts',
      // dirs: "node_modules/omnius-ui-uni/lib/components",
      resolvers: [resolver],
    }),

    uni(),
    UnoCSS(),
  ],
  css: {
    postcss: {
      plugins: [nested],
    },
  },
})
