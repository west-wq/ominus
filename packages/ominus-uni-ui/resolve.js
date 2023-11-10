// unplugin-vue-component resolver

// 'use strict'

const resolver = (componentName) => {
  if (componentName.startsWith('Om'))
    return {
      from: `@omnius-uni/ui/lib/components/${componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}/${componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}.vue`,
    }
}

module.exports = resolver
