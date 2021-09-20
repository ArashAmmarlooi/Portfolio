const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const LinkTypePlugin =
  require("html-webpack-link-type-plugin").HtmlWebpackLinkTypePlugin;
const { mainModule } = require("process");
const devMode = process.env.NODE_ENV === "production";

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: devMode ? "bundle.js" : "bundle.[contenthash].js",
    publicPath:""
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "src"),
    // inline:true,
    // watchContentBase: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      // {
      //   test: /\.(html)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {minimize: true}
      //   }
      // },
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              //  sourceMap: true,
              modules: {
                // namedExport: true,y
                localIdentName: "[local]-[hash:base64:5]",
                // localIdentName: "[local]",
                // exportLocalsConvention: "camelCase",
                // exportOnlyLocals: true,
                // localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          // "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[hash].css",
      linkType: "text/css",
      experimentalUseImportModule: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      // inject: true,
      template: "./public/index.html",
    }),
    new WebpackManifestPlugin(),
  ],
};

module.exports = config;
