'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const DataHub = require('macaca-datahub')
const datahub = new DataHub()

function resolve(dir) {
  return path.join(__dirname, dir)
}

const alias = fs.readdirSync(resolve('src')).reduce((memo, f) => {
  memo[f] = resolve(`src/${f}`)
  return memo
}, {})

const entryPath = path.join(__dirname, 'src/entry')

const entries = fs.readdirSync(entryPath).reduce((o, filename) => {
  o[filename] = [
    resolve('src/utils/polyfill.js'),
    path.join(entryPath, filename, 'index.js'),
  ]
  return o
}, {})

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  const publicPath = isProduction ? '' : '/'

  const webpackConfig = {
    stats: {
      publicPath: true,
      chunks: false,
      modules: false,
      children: false,
      entrypoints: false,
      chunkModules: false,
    },

    devtool: isProduction ? false : 'source-map',

    entry: entries,

    output: {
      path: path.join(__dirname, 'dist/'),
      publicPath,
      filename: isProduction
        ? 'asset/[name].[chunkhash].js'
        : 'asset/[name].js',
      chunkFilename: isProduction
        ? 'asset/[name].[chunkhash].js'
        : 'asset/[name].js',
    },

    resolve: {
      alias: {
        ...alias,
        vue$: 'vue/dist/vue.esm.js',
      },
      extensions: ['.js', '.vue', '.json', '.less'],
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
          loader: 'babel-loader',
        },
        {
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          include: /\/icon\/.*svg/,
          options: {
            symbolId: 'icon-[name]',
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          exclude: /\/icon\/.*svg/,
          options: {
            limit: 4000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: isProduction
                  ? '[name].[hash:7].[ext]'
                  : '[name][hash].[ext]',
                publicPath: isProduction ? '../static' : '',
                outputPath: isProduction ? 'static' : '',
              },
            },
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 4000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: isProduction
                  ? '[name].[hash:7].[ext]'
                  : '[name][hash].[ext]',
                publicPath: isProduction ? '../font' : '',
                outputPath: isProduction ? 'font' : '',
              },
            },
          },
        },
      ],
    },

    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: isProduction
          ? 'asset/[name].[contenthash].css'
          : 'asset/[name].css',
      }),
      ...Object.keys(entries).map(
        name =>
          new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: `!!awesome-ejs-compiled-loader!src/entry/${name}/index.html`,
            inject: true,
            minify: isProduction
              ? {
                  removeComments: true,
                  collapseWhitespace: true,
                  minifyJS: true,
                }
              : {},
            chunks: [name, 'runtime', 'commons', 'vendors', 'vue-package'],
          })
      ),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'static'),
          to: './static',
          ignore: ['.*'],
        },
      ]),
    ],

    devServer: {
      historyApiFallback: true,
      hot: true,
      overlay: true,
      host: '0.0.0.0',
      contentBase: './',
      stats: 'errors-only',
      open: process.env.NODE_ENV !== 'test',
      after: () => {
        datahub.startServer({
          port: 5678,
          store: path.join(__dirname, 'data'),
        })
      },
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vuePackage: {
            name: 'vue-package',
            test: /[\\/]node_modules\/.*vue/,
            priority: 2,
          },
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
          },
          default: {
            name: 'commons',
            enforce: true,
            minChunks: 2,
          },
        },
      },
      runtimeChunk: 'single',
    },
  }

  if (!isProduction) {
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (process.env.npm_config_report) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
  }

  return webpackConfig
}
