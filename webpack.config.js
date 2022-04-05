const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001, //default 8080
        open: true,
        hot: true,
    },
    //loaders
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type:'asset/resource'}
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "just a Demo",
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),
    ]
}