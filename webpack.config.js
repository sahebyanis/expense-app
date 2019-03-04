const path = require("path");
// entry point -> output
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("styles.css");

console.log(path.join(__dirname, "public"));




module.exports = (env) => {

    const isProduction = env ==="production";
    return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "public", "dist"),
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
            use: CSSExtract.extract({
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })

        }
    ]
    },
    plugins: [
      CSSExtract  
    ],
    devtool: isProduction? "source-map" :'cheap-module-eval-sourcemap',
    devServer : {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        publicPath: "/dist/"
    }
}
};

