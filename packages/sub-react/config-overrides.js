const { name } = require('./package');
// const path = require('path');

  module.exports = {
    webpack: config => {
      config.output.library = `${name}-[name]`;
      config.output.libraryTarget = 'umd';
      config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; //output.jsonpFunction 已更新为 => output.chunkLoadingGlobal
      config.output.publicPath=`/sub-react/`;
      // config.output.path=path.resolve(__dirname, 'build/sub-react');
      return config;
    },
    devServer: (configFunction) => {
      return (proxy, allowedHost) => {
        const config = configFunction(proxy, allowedHost);
        config.historyApiFallback = true;
        config.open = false;
        config.hot = false;
        config.static = false;
        config.liveReload = false;
        config.headers = {
          'Access-Control-Allow-Origin': '*',
        };
        return config;
      }
    }
  }