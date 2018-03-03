/**
*                _                      _                          _ 
* __      _____| |__  _ __   __ _  ___| | __  _ __  _ __ ___   __| |
* \ \ /\ / / _ \ '_ \| '_ \ / _` |/ __| |/ / | '_ \| '__/ _ \ / _` |
*  \ V  V /  __/ |_) | |_) | (_| | (__|   <  | |_) | | | (_) | (_| |
*   \_/\_/ \___|_.__/| .__/ \__,_|\___|_|\_\ | .__/|_|  \___/ \__,_|
*                    |_|                     |_|                    
* 
* Configuracion de webpack para crear el build de produccion
* ya con souce map activado para futuros bugs de la aplicacion 
* con el plugin uglifyjs-webpack-plugin este para minimizar nuestro javascript
*
*/              

const merge             =   require('webpack-merge')
const UglifyJSPlugin    =   require('uglifyjs-webpack-plugin')
const common            =   require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [new UglifyJSPlugin({
        sourceMap: true
    })]
})