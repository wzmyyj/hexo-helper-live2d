var webpack = require('webpack');
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var HtmlWebpackConfig = {
    filename: 'insert.html',
    template: "./src/insert.html",
    hash: true,
    showErrors: true
};

module.exports = {
    entry: [
        "./src/main.js"
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackConfig),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: true
          },
          sourceMap: false,
          mangle: true
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
    ],

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ["env"]
                    }
                }],
            }
        ]
    }
}