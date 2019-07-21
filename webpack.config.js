const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
