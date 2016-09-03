const elixir = require('laravel-elixir');
const path   = require('path');

require('laravel-elixir-webpack-official');
require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir.webpack.mergeConfig({
  babel : {
    presets: ['es2015', 'react'],
    plugins: ['transform-runtime', 'antd']
  },
  module: {
    loaders: [{
      test   : /\.jsx/,
      include: path.join(__dirname, 'resources/assets'),
      exclude: /node_modules/,
      loader : 'babel'
    }]
  }
});

elixir(mix => {
  // mix.sass('app.scss', 'resources/assets/css/app.css');
  // mix.less('antd.less', 'resources/assets/css/antd.css');
  // mix.styles(['app.css', 'antd.css'],'public/css/all.css');
  mix.less('antd.less');
  mix.webpack('app.js');
});
