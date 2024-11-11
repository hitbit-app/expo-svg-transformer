const { default: svgr } = require('@svgr/core');
const metroTransformer = require('@react-native/metro-babel-transformer');

const svgoConfig = {
  plugins: [
    { inlineStyles: { onlyMatchedOnce: false } },
  ],
};

const svgrConfig = {
  native: true,
  svgoConfig,
  plugins: [
    '@svgr/plugin-svgo',
    '@svgr/plugin-jsx',
  ],
};

module.exports.transform = function(file) {
  const { filename } = file;

  if (filename.endsWith('.svg')) {
    file.src = svgr.sync(file.src, svgrConfig);
  }

  return metroTransformer.transform(file);
};

module.exports.default = function(input) {
  return svgr(input, svgrConfig);
};
