const path = require('path');
const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js'),
        volumn: path.resolve(__dirname, '../src/pages/step2/volumn/index.js'),
        path: path.resolve(__dirname, '../src/pages/step2/path/index.js'),
        letterChange: path.resolve(__dirname, '../src/pages/step2/letter.change/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../src')
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        renderer
                    }
                }
            ]
        }]
    },
    devtool: "cheap-eval-source-map"
};