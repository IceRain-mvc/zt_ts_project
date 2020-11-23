let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
  mode:"development",
  entry:path.join(__dirname,"src/index.tsx"),
  output:{
    filename:"[name].[hash].js",
    path:path.join(__dirname,"dist")
  },
  devServer:{
    contentBase:path.join(__dirname,"./dist"),
    hot:true,
    historyApiFallback:{
      index:"./index.html"
    },
  },
  module:{
    rules:[
      {
        test:/.tsx?$/,
        loader:"ts-loader"
      }
    ]
  },
  resolve:{
    extensions:[".ts",".tsx",".js",".json"],
    alias:{
      "@":path.resolve("src")
    }
  },
  devtool:false,
  plugins:[
    new HtmlWebpackPlugin({
      template:"./index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}