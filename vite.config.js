

const { createVuePlugin } = require('vite-plugin-vue2');
import sass from 'sass'

module.exports = {
  plugins: [createVuePlugin(),
  {
    name: 'sass',
    preprocess: {
      sass: {
        implementation: sass,
      },
    },
  },
]

};