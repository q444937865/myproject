const path = require("path");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./mio.common.js");
module.exports = function(env) {
  let plugins = [new UglifyJSPlugin()],
    devtool = "none";
  if (env.production) {
    plugins = [];
    devtool = "source-map";
  }
  return merge(common, {
    devtool,
    plugins,
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "../dist")
    },
    mode: "production"
  });
};
