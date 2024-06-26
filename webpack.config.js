const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',


  },


  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    ],
},
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].bundle.js',

  
  clean: true,
},


  optimization:{
    runtimeChunk:'single',
  }
};