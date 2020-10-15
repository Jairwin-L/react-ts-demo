const {override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)
process.env.GENERATE_SOURCEMAP = "false"
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1890ff'},
  }),
  addWebpackAlias({
    '@': resolve('src'),
    '@style': resolve('src/styles'),
    '@util': resolve('src/util'),
    '@assets': resolve('src/assets'),
  })
)
