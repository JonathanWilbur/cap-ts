const path = require("path");

module.exports = {
    entry: [
        "./source/index.ts",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "cap.min.js",
        library: "cap",
        libraryTarget: "var",
    },
    // mode: "development",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/u,
                loader: "ts-loader",
                exclude: /node_modules/u,
            },
        ],
    },
    resolve: {
        extensions: [
            ".ts",
            ".js",
        ],
    },
    optimization: {
        minimize: true,
    },
    target: "web",
};
