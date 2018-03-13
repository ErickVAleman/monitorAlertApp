/**                 _                      _          _
 *   __      _____| |__  _ __   __ _  ___| | __   __| | _____   __
 *   \ \ /\ / / _ \ '_ \| '_ \ / _` |/ __| |/ /  / _` |/ _ \ \ / /
 *    \ V  V /  __/ |_) | |_) | (_| | (__|   <  | (_| |  __/\ V /
 *     \_/\_/ \___|_.__/| .__/ \__,_|\___|_|\_\  \__,_|\___| \_/
 *                      |_|
 *                      |_|
 *
 * Configuracion de desarrollo de webpack
 * importa la configuracion comun y la libreria webpack merge
 * esto para agregar una herramienta de desarrollo llamada
 * source map esto para debugear la app y omitir futuros errores
 *
 */
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    bonjour: true,
    host: '0.0.0.0',
    port: 5000, 
  }
});
