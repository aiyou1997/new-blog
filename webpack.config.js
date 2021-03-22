const path = require('path')
const webpack = require('webpack')
const webpackProductionConfig = require('./webpack.prod.js')
const webpackDevelopmentConfig = require('./webpack.dev.js')
const env = process.env.NODE_ENV;
// 让配置文件支持智能提示
// import { Configuration } from 'webpack'

// /**
//  * @type {Configuration}
//  */
let config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: ['vue-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 8080
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}

if (env === 'production') {
    config = Object.assign(config, webpackProductionConfig)
}

if (env === 'development') {
    config = Object.assign(config, webpackDevelopmentConfig)
}


module.exports = config