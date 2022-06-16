const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   devServer: {
//     proxy: {
//       'api': {
//         target: 'http://localhost:9000',
//         ws: true,
//         changeOrigin: true
//       },
//     }
//   }
// }
