const path = require("path");
// entry point -> output


console.log(path.join(__dirname, "public"));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    // loader - run file through babel
    module: {
        rules: [   
            {
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]

        }
    ]
    },
    devtool: 'cheap-module-eval-sourcemap',
    devServer : {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    }

};

