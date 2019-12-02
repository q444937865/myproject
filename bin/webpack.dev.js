const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const logPlugin = require("log-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [
    // 热更新，热更新不是刷新
    new webpack.HotModuleReplacementPlugin(),
    new logPlugin({ showWords: true, showEvent: false })
  ],
  devServer: {
    contentBase: "./dist",
    // port: 3000,          // 端口
    open: true, // 自动打开浏览器
    hot: true, // 开启热更新
    overlay: true, // 浏览器页面上显示错误
    noInfo: true
  }
});
