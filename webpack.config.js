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
        assetModuleFilename: 'images/[name][ext][query]',
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
            //csss
            {test: /\.css$/, use: ['style-loader','css-loader']},
            //images
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type:'asset/resource'},
            //js for babel
            { test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]', outputPath: 'fonts/', }
            },
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "E-commerce",
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),
    ]
}