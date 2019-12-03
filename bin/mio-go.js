#!/usr/bin/env node

const program = require("commander");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const devServerConfig = require("./mio.dev");

const runWebpackDevServer = program => {
  const compiler = webpack(devServerConfig);
  const server = new webpackDevServer(compiler, {
    open: true,
    noInfo: true
  });
  server.listen(
    devServerConfig.devServer.port,
    devServerConfig.devServer.host,
    () => {} // 成功回调
  );
  // compiler.run((err, stats) => {
  //   hasErr(err, stats);
  // });
};
const hasErr = (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) console.error(err.details);
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) console.error(info.errors);
  if (stats.hasWarnings()) console.warn(info.warnings);
};

const mio = program => {
  runWebpackDevServer(program);
};

program
  .option("-c, --config <path>", "set config path, defaults to ~/mio.dev.js")
  .option("-e, --entry <path>", "set entry path, defaults to ~/src/index.js")
  .parse(process.argv);

mio(program);
