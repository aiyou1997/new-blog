// webpack.dev.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: "aiyou\'s blog",
            template: './public/index.html',
            inject: 'body',
            clean: true
        }),
        new VueLoaderPlugin(),
        // 注入全局变量
        // new webpack.DefinePlugin({

        // })
    ],
    devtool: 'eval-source-map',
}