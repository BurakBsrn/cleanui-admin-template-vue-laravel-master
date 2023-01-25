const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix build & config
mix
  .webpackConfig({
    output: {
      chunkFilename: 'js/chunks/[name].js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/app/src'),
      }
    },
  })
  .options({
    postCss: [
      require('autoprefixer'),
    ],
  })
  .js('resources/app/src/main.js', 'public/js')
  .copyDirectory('resources/app/public/resources', 'public/resources')
  .copy('resources/app/public/favicon.png', 'public/favicon.png')
  .version();

// rewrite webpack loaders rules
mix
  .extend('rewriteRules', webpackConfig => {
    // enable js in less
    const lessRule = webpackConfig.module.rules.find(rule => String(rule.test) === '/\\.less$/');
    lessRule.loaders[3] = {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }

    // enable css modules for *.module.scss files
    const scssRule = webpackConfig.module.rules.find(rule => String(rule.test) === '/\\.scss$/');
    const postCssLoader = scssRule.loaders.find(
      (l) => l.loader === "postcss-loader"
    );
    const sassLoader = scssRule.loaders.find((l) => l.loader === "sass-loader");
    delete scssRule.loaders
    scssRule.oneOf = [
      {
        resourceQuery: /module/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
          postCssLoader,
          sassLoader,
        ],
      },
      {
        use: [
          "style-loader",
          "css-loader",
          postCssLoader,
          sassLoader,
        ],
      },
    ]

  });
mix.rewriteRules();