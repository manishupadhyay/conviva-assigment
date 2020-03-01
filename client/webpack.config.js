const HtmlwebpackPlugin =  require('html-webpack-plugin');
const htmlLoader = require('html-loader');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        proxy: {
          '/api': 'http://localhost:3000'
        }
    }
}