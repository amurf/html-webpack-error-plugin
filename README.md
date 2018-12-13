# html-webpack-error-plugin

This requires https://github.com/jantimon/html-webpack-plugin to function!

Outputs errors in place of page content when they occur during build, ensuring you're not going to view stale content in the case of a missed error, also no need to stare at the console output anymore!

## Usage

```
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const HtmlWebpackErrorPlugin = require('html-webpack-error-plugin');

plugins: [  
  new HtmlWebpackPlugin({ /* your config here */ }}),
  new HtmlWebpackErrorPlugin(),
],
```
