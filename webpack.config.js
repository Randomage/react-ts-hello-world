// const webpack = require('webpack');

// module.exports = {
//     entry: "./src/index.tsx",
//     output: {
//         filename: "bundle.js",
//         path: __dirname + "/dist"
//     },

//     // Enable sourcemaps for debugging webpack's output.
//     devtool: "source-map",
//     mode: 'development',

//     plugins: [
//         new webpack.NamedModulesPlugin(),
//         new webpack.HotModuleReplacementPlugin()
//     ],

//     resolve: {
//         // Add '.ts' and '.tsx' as resolvable extensions.
//         extensions: [".ts", ".tsx", ".js", ".json"]
//     },

//     module: {
//         rules: [
//             // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
//             { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

//             // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//             { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
//         ]
//     },

//     // When importing a module whose path matches one of the following, just
//     // assume a corresponding global variable exists and use that instead.
//     // This is important because it allows us to avoid bundling all of our
//     // dependencies, which allows browsers to cache those libraries between builds.
//     externals: {
//         "react": "React",
//         "react-dom": "ReactDOM"
//     },
//     watch: true,
//     devServer: {
//         contentBase: './dist',
//         hot: true
//     },

// };


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './src/index.tsx'
    },

    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World',
            inject: false,
            template: require('html-webpack-template'),
            bodyHtmlSnippet: '<app-body></app-body>'
        }),
        new webpack.NamedModulesPlugin()
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            plugins: ['react-hot-loader/babel'],
                        },
                    },
                    'awesome-typescript-loader'
                ]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
};