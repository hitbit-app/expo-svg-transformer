const { default: svgr } = require('@svgr/core');
const metroTransformer = require('metro-react-native-babel-transformer');

const svgrOpts = {
  native: true,
  plugins: [
    '@svgr/plugin-svgo',
    '@svgr/plugin-jsx',
    '@svgr/plugin-prettier',
  ],
};

module.exports.transform = function(file) {
  const { filename } = file;

  if (filename.endsWith('.svg')) {
    file.src = svgr.sync(file.src, svgrOpts);
  }

  return metroTransformer.transform(file);
};
