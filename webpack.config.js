const path = require("path");
const webpack = require("webpack"); //we need this so plugins will work

//First, we need to create the main configuration object within our file. We'll write options 
//within this object that tell webpack what to do. As of webpack version 4, a config file is 
//not necessary, but we still want to use one so that we can be more specific with how 
//webpack will function.
//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode. 

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'//is usually set to production
};
