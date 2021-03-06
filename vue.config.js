
const webpack = require('webpack')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejsonconfig/'
    : '/',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    https: false, // https:{type:Boolean}
    proxy: 'http://localhost:3000'
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jQuery',
        $: 'jQuery'
      })
    ]
  }
}
