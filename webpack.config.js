var path = require('path');

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      timers: require.resolve('timers-browserify')
    }
  }
};
