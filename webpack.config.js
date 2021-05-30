const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/index.tsx',
    app: './src/App.tsx',
    skills: './src/component/Skills.tsx',
    titlecard: './src/component/TitleCard.tsx',
    about: './src/component/About.tsx',
  },
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'static/js/[name].js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    watchContentBase: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}