reading https://webpack.js.org/guides/getting-started/
so now here we are at `9e3f915`

we have webpack-cli looking for a default config which it is finding in `webpack.config.js`.

```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: ['./src/js/index.js'],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html',
      }),
    ],
  };
```

the first thing that matters in this file is the `entry:` property. Here we are saying that theres a single entry in the `js` folder in `src`. ANY file that is imported as a result of interpreting this file(and any other file mentioned in `entry`) gets sucked into a bundle and output into a file specified in `output`. At a fundamental level this is how webpack should be looked at and thought about. It takes a file, sucks in any files needed to run that file and then outputs a larger file in an all included file that webpack calls a `bundle`.


The next point of interest is the `module` bit. This `module` actually has nothing to do with the javascript module system that is. Every file that meets the test listed in modules is processed with a loader. here we see anything that ends in js is processed with babel-loader.


 That webpack config is
we have defined a entrypoint for our webpack config

```
WARNING in configuration
The 'mode' option has not been set. Set 'mode' option to 'development' or 'production' to enable defaults for this environment.
```

at this point we JUST have webpack using babel transpilier on our code.
we havent yet added a "mode" to our webpack config so lets do that.


