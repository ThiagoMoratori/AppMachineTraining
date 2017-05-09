/**
 * Created by Guru Machine on 08/05/2017.
 */
module.exports = {
    entry: "./src/js/main.js",
    output: {
        "filename": "./src/js-es5/__bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"/*,
                        options:{
                            cacheDirectory: true
                        }*/
                    },
                    {
                        loader: "gnirts-loader"
                    }
                ]
            }
        ]
    }
}
