const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const RobotstxtPlugin = require("robotstxt-webpack-plugin") // Install in case you need it
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const OUTPUT_DIR = path.join(__dirname, 'build')
const SOURCE_DIR = path.join(__dirname, 'src')
const { env } = process
const newEnv = dotenv.config().parsed || {}
const envKeys = Object.entries(newEnv).length > 0 ? Object.keys(newEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
}, {}) : {}

const common = {
    mode: env.NODE_ENV,
    entry: {
        index: ['./src/index']
    },
    output: {
        path: OUTPUT_DIR,
        publicPath: '/',
        filename: 'scripts/bundle-[fullhash].js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                include: [SOURCE_DIR],
                exclude: /mode_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|ico|svg|jpg|jpeg|gif|pdf|glb|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new HtmlWebpackPlugin({
            dev: true,
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['index'],
            hash: true
        })
    ]
}

if (env.NODE_ENV === 'development') {
    module.exports = merge(common, {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: SOURCE_DIR,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                },
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new FaviconsWebpackPlugin({
                logo: path.join(__dirname, 'public/favicon.png'),
                mode: 'light'
            }),
            new ForkTsCheckerWebpackPlugin()
        ],
        devtool: 'eval',
        devServer: {
            static: './',
            hot: true,
            open: true,
            port: 9000,
            historyApiFallback: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: false
                }
            }
        }
    })
} else {
    module.exports = merge(common, {
        optimization: {
            minimize: true
        },
        performance: { hints: false },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: SOURCE_DIR,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                },
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            // new RobotstxtPlugin(robotsOptions),
            new MiniCssExtractPlugin({
                filename: '[fullhash]-global-styles.css',
                chunkFilename: '[id].[fullhash]-global-styles.css'
            }),
            new FaviconsWebpackPlugin({
                logo: path.join(__dirname, 'public/favicon.png'),
                mode: 'webapp',
                // manifest: manifest,
                favicons: {
                    appName: 'Portfolio',
                    appShortName: 'Portfolio',
                    appDescription: 'New Portfolio',
                    developerName: 'Aleksandra Spadlo',
                    developerURL: "https://github.com/alexspadlo",
                    dir: 'auto',
                    lang: 'en-US',
                    background: '#FFF',
                    theme_color: '#FFF',
                    display: "standalone",
                    appleStatusBarStyle: 'black-translucent',
                    orientation: 'portrait',
                    start_url: "/",
                    version: "1.0.0",
                    logging: false,
                    icons: {
                        android: true,
                        appleIcon: true,
                        favicons: true,
                        firefox: true,
                        windows: true
                    }
                }
            })
        ]
    })
}