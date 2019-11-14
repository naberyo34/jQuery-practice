const mode = 'development';
const enabledSourceMap = mode === 'development';

module.exports = {
  mode: mode,
  // バンドル設定
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        //SCSSをjsにバンドル
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      {
        //CSSをjsにバンドル
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    watchContentBase: true,
    open: true,
  },
};
