const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
  entry: './core/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'satellite-droparea',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  }
}