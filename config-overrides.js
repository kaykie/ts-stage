const {
  override,
  fixBabelImports,
  disableEsLint,
  addPostcssPlugins,
  addDecoratorsLegacy,
  addLessLoader
} = require('customize-cra');

module.exports = override(
  disableEsLint(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#658FFF",
      "@tree-title-height": "44px",
      "@input-height-lg": "48px"
    },
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addDecoratorsLegacy()
);
