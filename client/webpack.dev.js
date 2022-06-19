const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    static: "./dist",
  },
};

module.exports = merge(commonConfig, devConfig);
