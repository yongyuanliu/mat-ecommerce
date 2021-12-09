const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");


const production = "production", development = "development";
const { NODE_ENV } = process.env;
const isProd = Object.is(NODE_ENV, production), isDev = Object.is(NODE_ENV, development);

function getModeAndCheck() {
    if (isProd) {
        return production;
    }
    if (isDev) {
        return development;
    }
    throw Error(`NODE_ENV: ${NODE_ENV} was error, must be ${production} or ${development}`);
}

const config = {
    mode: getModeAndCheck(),
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: "[name]-bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            title: "ecommerce",
            inject: "body",
            chunks: ["index"]
        }),
    ],
};

function prodConfig() {
    if (!isProd) {
        console.log(`NODE_ENV: ${NODE_ENV}, un append ${production} config`)
        return;
    }
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()],
    };
}

function devConfig() {
    if (!isDev) {
        console.log(`NODE_ENV: ${NODE_ENV}, un append ${development} config`)
        return;
    }
    devServerConfig();
}

function devServerConfig() {
    config.devServer = {
        port: 9000,
        open: true,
        hot: true,
        compress: true
    };
}

//maybe dev
devConfig();

//maybe prod
prodConfig();

module.exports = config;