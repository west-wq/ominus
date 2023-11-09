import { presetIcons, transformerDirectives, type Preset, type SourceCodeTransformer, presetWebFonts, definePreset } from 'unocss'
import presetWeapp, { type Theme } from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { SVG, cleanupSVG, runSVGO, parseColors, isEmptyColor } from '@iconify/tools'
import { compareColors, stringToColor } from '@iconify/utils/lib/colors'
import type { Color } from '@iconify/utils/lib/colors/types'
const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export function unoTransformer() {
  return [transformerDirectives(), transformerAttributify() as unknown as SourceCodeTransformer, transformerClass() as unknown as SourceCodeTransformer]
}
function unoCustomPresetCallback() {
  return () => {
    return {
      name: 'custom-preset',
      presets: [
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
          collections: {
            icons: FileSystemIconLoader('node_modules/omnius-ui-uni/lib/assets/icons', async (svg) => {
              const svgObject = new SVG(svg)
              await cleanupSVG(svgObject)
              await runSVGO(svgObject)
              await parseColors(svgObject, {
                defaultColor: 'currentColor',
                callback: (_attr, colorStr, color) => {
                  if (!color) {
                    // color === null, so color cannot be parsed
                    // Return colorStr to keep old value
                    return colorStr
                  }

                  if (isEmptyColor(color)) {
                    // Color is empty: 'none' or 'transparent'
                    // Return color object to keep old value
                    return color
                  }

                  // Black color: change to 'currentColor'
                  if (compareColors(color, stringToColor('black') as Color)) {
                    return 'currentColor'
                  }

                  // White color: belongs to white background rectangle: remove rectangle
                  if (compareColors(color, stringToColor('white') as Color)) {
                    return 'remove'
                  }

                  return colorStr
                },
              })
              return svgObject.toMinifiedString()
            }),
          },
        }),
        presetWebFonts({
          provider: 'bunny',
          fonts: {
            sans: ['Noto Sans SC:400,700'],
            inter: ['Inter:400,700'],
          },
        }),
        presetWeapp({
          whRpx: false,
        }) as Preset<Theme>,
        presetWeappAttributify() as Preset<Theme>,
      ],
      shortcuts: [
        {
          'tg-display-large': 'text-128rpx leading-144rpx font-700',
          'tg-display-medium': 'text-96rpx leading-112rpx font-700',

          'tg-headline-large': 'text-72rpx leading-88rpx font-700',
          'tg-headline-medium': 'text-56rpx leading-72rpx font-700',
          'tg-headline-small': 'text-48rpx leading-64rpx font-700',

          'tg-title-extra-large': 'text-40rpx leading-56rpx font-700',
          'tg-title-large': 'text-36rpx leading-52rpx font-700',
          'tg-title-medium': 'text-32rpx leading-48rpx font-700',
          'tg-title-small': 'text-28rpx leading-44rpx font-700',

          'tg-body-large': 'text-32rpx leading-48rpx font-400',
          'tg-body-medium': 'text-28rpx leading-44rpx font-400',
          'tg-body-small': 'text-24rpx leading-40rpx font-400',
          'tg-body-extra-small': 'text-20rpx leading-32rpx font-400',

          'tg-mark-large': 'text-32rpx leading-48rpx font-700',
          'tg-mark-medium': 'text-28rpx leading-44rpx font-700',
          'tg-mark-small': 'text-24rpx leading-40rpx font-700',
          'tg-mark-extra-small': 'text-20rpx leading-32rpx font-700',

          'tg-link-large': 'text-32rpx leading-48rpx font-400',
          'tg-link-medium': 'text-28rpx leading-44rpx font-400',
          'tg-link-small': 'text-24rpx leading-40rpx font-400',
        },
      ],
      theme: {
        colors: {
          white: 'var(--color-white)',
          black: 'var(--color-black)',
          brand: {
            1: 'var(--color-brand-1)',
            2: 'var(--color-brand-2)',
            3: 'var(--color-brand-3)',
            4: 'var(--color-brand-4)',
            5: 'var(--color-brand-5)',
            6: 'var(--color-brand-6)',
            7: 'var(--color-brand-7)',
            8: 'var(--color-brand-8)',
            9: 'var(--color-brand-9)',
            10: 'var(--color-brand-10)',
            DEFAULT: 'var(--color-brand)',
            active: 'var(--color-brand-active)',
            disabled: 'var(--color-brand-disabled)',
            focus: 'var(--color-brand-focus)',
            light: {
              DEFAULT: 'var(--color-brand-light)',
              active: 'var(--color-brand-light-active)',
            },
          },
          error: {
            1: 'var(--color-error-1)',
            2: 'var(--color-error-2)',
            3: 'var(--color-error-3)',
            4: 'var(--color-error-4)',
            5: 'var(--color-error-5)',
            6: 'var(--color-error-6)',
            7: 'var(--color-error-7)',
            8: 'var(--color-error-8)',
            9: 'var(--color-error-9)',
            10: 'var(--color-error-10)',
            DEFAULT: 'var(--color-error)',
            active: 'var(--color-error-active)',
            disabled: 'var(--color-error-disabled)',
            focus: 'var(--color-error-focus)',
            light: 'var(--color-error-light)',
          },
          warning: {
            1: 'var(--color-warning-1)',
            2: 'var(--color-warning-2)',
            3: 'var(--color-warning-3)',
            4: 'var(--color-warning-4)',
            5: 'var(--color-warning-5)',
            6: 'var(--color-warning-6)',
            7: 'var(--color-warning-7)',
            8: 'var(--color-warning-8)',
            9: 'var(--color-warning-9)',
            10: 'var(--color-warning-10)',
            DEFAULT: 'var(--color-warning)',
            active: 'var(--color-warning-active)',
            disabled: 'var(--color-warning-disabled)',
            focus: 'var(--color-warning-focus)',
            light: 'var(--color-warning-light)',
          },
          success: {
            1: 'var(--color-success-1)',
            2: 'var(--color-success-2)',
            3: 'var(--color-success-3)',
            4: 'var(--color-success-4)',
            5: 'var(--color-success-5)',
            6: 'var(--color-success-6)',
            7: 'var(--color-success-7)',
            8: 'var(--color-success-8)',
            9: 'var(--color-success-9)',
            10: 'var(--color-success-10)',
            DEFAULT: 'var(--color-success)',
            active: 'var(--color-success-active)',
            disabled: 'var(--color-success-disabled)',
            focus: 'var(--color-success-focus)',
            light: 'var(--color-success-light)',
          },
          gray: {
            1: 'var(--color-gray-1)',
            2: 'var(--color-gray-2)',
            3: 'var(--color-gray-3)',
            4: 'var(--color-gray-4)',
            5: 'var(--color-gray-5)',
            6: 'var(--color-gray-6)',
            7: 'var(--color-gray-7)',
            8: 'var(--color-gray-8)',
            9: 'var(--color-gray-9)',
            10: 'var(--color-gray-10)',
            11: 'var(--color-gray-11)',
            12: 'var(--color-gray-12)',
            13: 'var(--color-gray-13)',
            14: 'var(--color-gray-14)',
          },
          font: {
            gray: {
              1: 'var(--color-font-gray-1)',
              2: 'var(--color-font-gray-2)',
              3: 'var(--color-font-gray-3)',
              4: 'var(--color-font-gray-4)',
            },
            white: {
              1: 'var(--color-font-white-1)',
              2: 'var(--color-font-white-2)',
              3: 'var(--color-font-white-3)',
              4: 'var(--color-font-white-4)',
            },
          },
          bg: {
            page: 'var(--color-bg-page)',
            container: 'var(--color-bg-container)',
          },
          stroke: 'var(--color-stroke)',
          border: 'var(--color-border)',
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            placeholder: 'var(--color-text-placeholder)',
            disabled: 'var(--color-text-disabled)',
            anti: 'var(--color-text-anti)',
            brand: 'var(--color-text-brand)',
            link: 'var(--color-text-link)',
          },
        },
        borderRadius: {
          small: 'var(--radius-small)',
          default: 'var(--radius-default)',
          large: 'var(--radius-large)',
          'extra-large': 'var(--radius-extra-large)',
          round: 'var(--radius-round)',
          circle: 'var(--radius-circle)',
        },
        boxShadow: {
          default: 'var(--shadow-default)',
          medium: 'var(--shadow-medium)',
          large: 'var(--shadow-large)',
        },
        duration: {
          'ultra-fast': 'var(--duration-ultra-fast)',
          faster: 'var(--duration-faster)',
          fast: 'var(--duration-fast)',
          normal: 'var(--duration-normal)',
          gentle: 'var(--duration-gentle)',
          slow: 'var(--duration-slow)',
          slower: 'var(--duration-slower)',
          'ultra-slow': 'var(--duration-ultra-slow)',
        },
      },
    }
  }
}
export const unoCustomPreset = definePreset(unoCustomPresetCallback())
