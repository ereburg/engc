const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

const getClientEnvironment = require('./config/env');
const { getAliasesFromTsConfig } = require('./config/paths');

const customAliases = getAliasesFromTsConfig();

module.exports = withPlugins([withTM(['dom7', 'swiper', 'body-scroll-lock'])], {
  env: getClientEnvironment(),
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /** Support TS path aliases */
    config.resolve.alias = {
      ...config.resolve.alias,
      ...customAliases,
    };

    /** Support import svg as React component */
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack?-svgo,+titleProp,+ref![path]', 'url-loader'],
    });

    /**
     * Fonts loader
     * Next.js can find font urls in css file and include them in build automatically.
     * So we don't need any extra config
     */
    // config.module.rules.push({
    //   test: /\.(woff|woff2|eot|ttf|otf)$/,
    //   use: {
    //     loader: 'file-loader',
    //     options: {
    //       name: '[name].[ext]',
    //       publicPath: `/_next/static/fonts/`,
    //       outputPath: `${isServer ? '../' : ''}static/fonts/`,
    //     },
    //   },
    // });

    /** Images loader */
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 8192,
            name: '[name]-[contenthash].[ext]',
            publicPath: `/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
          },
        },
      ],
    });

    /**
     * How to add polyfills in Next.js
     * Source: https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
     */
    if (process.env.NODE_ENV === 'production') {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        const polyfillsRelativePath = './src/polyfills/index.js';

        if (
          entries['main.js'] &&
          !entries['main.js'].includes(polyfillsRelativePath)
        ) {
          entries['main.js'].unshift(polyfillsRelativePath);
        }

        return entries;
      };
    }

    return config;
  },
});
