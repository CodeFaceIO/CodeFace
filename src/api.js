/* eslint-disable no-unused-vars */
import styleguidist from 'react-styleguidist';

const styleguide = styleguidist(() => {
  return {
    logger: {
      warn: console.warn,
      info: console.log,
      debug: console.log,
    },
    components: './lib/components/**/*.js',
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
            ],
          },
        ],
      },
    },
  };
});
