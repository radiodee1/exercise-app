const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './webpack-vue/src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      /* { test: /\.css$/, use: ['vue-style-loader', 'css-loader']}, */
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
              name: '[1]-[name].[ext]'

            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'css-loader'
        ]
      }
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack-vue/src/main.js',
    }),
    new VueLoaderPlugin(),
  ]
};