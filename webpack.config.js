const path = require("path");
const webpack = require("webpack"); //we need this so plugins will work
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//First, we need to create the main configuration object within our file. We'll write options 
//within this object that tell webpack what to do. As of webpack version 4, a config file is 
//not necessary, but we still want to use one so that we can be more specific with how 
//webpack will function.
//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. 
const config = {
    devServer: {
    static: {
      directory: __dirname
    } 
  },
// module.exports = {

    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                     loader: 'file-loader',
                     options: {
                         esModule: false,
                         name (file) {
                             return "[path][name].[ext]"
                         },
                         publicPath: function(url) {
                             return url.replace("../", "/assets/")
                         }
                     }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report outputs to a HTML file in the dist folder
        })
    ],
    mode: 'development'//is usually set to production
};


module.exports = config;