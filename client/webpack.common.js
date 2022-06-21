const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./javaScript/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "CssStyles/[name].[hash].css",
    }),
  ],
  devServer: {
    hot: true,
  },
  target: "web",
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `[name].[hash].[ext]`,
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  //   // ...add HowModuleReplacementPlugin and devServer
  //   plugins: [new webpack.HotModuleReplacementPlugin()],
  //   devServer: {
  //     contentBase: path.resolve(__dirname, "./dist"),
  //     hot: true,
  //   },
};
