
import sass from 'sass'
const { createVuePlugin } = require('vite-plugin-vue2');

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