/**                _                      _
 *   __      _____| |__  _ __   __ _  ___| | __   ___ ___  _ __ ___  _ __ ___   ___  _ __
 *   \ \ /\ / / _ \ '_ \| '_ \ / _` |/ __| |/ /  / __/ _ \| '_ ` _ \| '_ ` _ \ / _ \| '_ \
 *    \ V  V /  __/ |_) | |_) | (_| | (__|   <  | (_| (_) | | | | | | | | | | | (_) | | | |
 *     \_/\_/ \___|_.__/| .__/ \__,_|\___|_|\_\  \___\___/|_| |_| |_|_| |_| |_|\___/|_| |_|
 *                      |_|
 *
 * Configuracion de toda la vida de webpack esto es para produccion y para desarrollo
 * aqui viene la configuracion de webpack-dev-server y de los plugins basicos para crear
 * los entornos de desarrollo y produccion.
 *
 *
 */

const path = require("path");
const fs = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const lessToJS = require("less-vars-to-js");
const themeVariables = lessToJS(
  fs.readFileSync(
    path.join(__dirname, "./src/assets/css/ant-theme-vars.less"),
    "utf8"
  )
);
const extractLESS = new ExtractTextPlugin("css/[name].[contenthash].css", {
  allChunks: true
});
const extractCSS = new ExtractTextPlugin("css/[name].[contenthash].css");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: extractCSS.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "less-loader"
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.less$/,
        use: extractLESS.extract(["css-loader", "less-loader"]) //
      },
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: ["env", "react", "stage-0"],
          plugins: [
            [
              "import",
              {
                libraryName: "antd",
                style: true
              }
            ],
            "transform-strict-mode",
            "transform-object-rest-spread"
          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./public/index.html"
    }),
    extractCSS,
    extractLESS
  ],
  output: {
    filename: "js/[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
