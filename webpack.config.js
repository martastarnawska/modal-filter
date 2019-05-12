const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: { 
        pageModal: './src/2/index.js', 
        pageFilter: './src/3/main.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: './[name].bundle.js'    
    }, 

    mode: 'development', 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
              },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            // inject: false,
            chunks: ['pageModal'],
            template: './src/2/2.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            // inject: false,
            chunks: ['pageFilter'],
            template: './src/3/3.html',
            filename: '3.html'
        })
    ]
}