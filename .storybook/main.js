const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(svg)$/i,
      use: ["svg-url-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.resolve.extensions.push(".svg");

    config.module.rules.forEach(function (data, key) {
      if (data.test.toString().indexOf('svg|') >= 0) {
        config.module.rules[key].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
        return false;
      }
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.devtool = 'inline-source-map';
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};