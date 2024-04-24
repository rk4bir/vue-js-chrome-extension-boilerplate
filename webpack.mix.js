let mix = require("laravel-mix");

mix
  .setPublicPath("./")
  .sass("src/sass/popup.scss", "dist/css")
  .js("src/app/popup.js", "dist/js")
  .js("src/background.js", "dist/js")
  .vue()
  .copy("src/images/", "dist/images")
  .copy("src/popup.html", "dist/")
  .copy("src/manifest.json", "dist/")
  .options({
    processCssUrls: false,
  });

mix.webpackConfig((webpack) => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // If you are using the options api.
        __VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
    ],
  };
});
