// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
  let { log } = console;
  log(`mode is: ${mode}`);

  return {
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundled.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ]
  };
};
