const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const $ = require("jquery");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
//const bootloader = require('bootstrap-loader');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const isProd = process.env.NODE_ENV === 'production'; // return true or false
const cssDev = ['style-loader','css-loader','postcss-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                    use: ['css-loader','postcss-loader', 'sass-loader']
                });
const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    
    entry: {
        app:'./src/app.js',
        bootstrap: bootstrapConfig,
        
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        assets: path.resolve('src/assets'),
        components: path.resolve('src/components'),
        general: path.resolve('src/general'),
        layouts: path.resolve('src/layouts'),
        routes: path.resolve('src/routes'),
        styles: path.resolve('src/styles'),
      },
    },
    module: {
        rules:[
            { 
                test: /\.(jpe?g|png|jpg|gif|svg)$/i,
                loader: [
                    "file-loader?name=img/[name].[ext]",
                    //"file-loader?name=[name].[ext]&outputPath=img/&publicPath=img/",
                    'image-webpack-loader'
                ]
            },
            {
                test:/\.scss$/,
                use: cssConfig
                // use: ExtractTextPlugin.extract({
                //     use: ['css-loader', 'sass-loader']
                // })
                //use: ['style-loader','css-loader','sass-loader']
            },
            { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(woff2?svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf?eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
            { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000,
        stats:"errors-only", /// used to show only error where from u running app
        //open: true // while starting project Open in new window
    },
    plugins: [
        // use for final template
        new HtmlWebpackPlugin({
            title: 'Webpack Template',
            minify:{
                collapseWhitespace: true // use for minified the file Like remove all space 
            },
            hash: true,
            excludeChunks:['contact'],
            //filename:"./../index.html", // change the final template file from dist folder to root dir
            template: './src/index.html', // Load a custom template, Optional is EJS(ejs by default)
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Contact Template',
        //     hash: true,
        //     chunks:['contact'],
        //     filename:'contact.html',
        //     template: './src/contact.html', // Load a custom template, Optional is EJS(ejs by default)
        // }),
        new ExtractTextPlugin({ filename: './css/[name].scss', disable: !isProd, allChunks: true }),

        new webpack.HotModuleReplacementPlugin(),
        // enable HRM Globllay

        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({filename:'[name].scss', allChunks: true }),
      
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        })
    ]
}