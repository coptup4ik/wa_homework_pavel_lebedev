const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        // lesson_6: ['babel-polyfill', './src/lesson_6/lesson_6.js'],
        // homework_1: ['babel-polyfill', './src/homework_1/homework_1.js'],
        // lesson_7: ['babel-polyfill', './src/lesson_7/lesson_7.js'],
        // homework_8: ['babel-polyfill', './src/homework_8/homework_8.js'],
        // lesson_9: ['babel-polyfill', './src/lesson_9/lesson_9.js'],
        // homework_9: ['babel-polyfill', './src/homework_9/homework_9.js'],
        // lesson_10: ['babel-polyfill', './src/lesson_10/lesson_10.js'],
        // homework_10: ['babel-polyfill', './src/homework_10/homework_10.js'],
        // lesson_11: ['babel-polyfill', './src/lesson_11/lesson_11.js'],
        // homework_11: ['babel-polyfill', './src/homework_11/homework_11.js'],
        // lesson_12: ['babel-polyfill', './src/lesson_12/lesson_12.js'],
        // homework_12: ['babel-polyfill', './src/homework_12/homework_12.js'],
        // lesson_13: ['babel-polyfill', './src/lesson_13/lesson_13.js'],
        // lesson_14: ['babel-polyfill', './src/lesson_14/lesson_14.js'],
        // homework_14: ['babel-polyfill', './src/homework_14/homework_14.js'],
        // lesson_15: ['babel-polyfill', './src/lesson_15/lesson_15.js'],
        // homework_15: ['babel-polyfill', './src/homework_15/homework_15.js'],
        // lesson_16: ['babel-polyfill', './src/lesson_16/lesson_16.js'],
        // lesson_17: ['babel-polyfill', './src/lesson_17/lesson_17.js'],
        graduation: ['babel-polyfill', './src/graduation/index.js'],
        react_tutor: ['babel-polyfill', './src/react_tutor/react_tutor.js'],
        react_accord: ['babel-polyfill', './src/react_accord/react_accord.js'],




    };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    ]
                },
                {
                    test: /\.css/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version',]
                    })
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'file-loader?name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;