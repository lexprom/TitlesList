const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: '/public/'
    },
    devServer: {
        open: true,
        openPage: '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        },
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: ['svg-react-loader']
            }
        ]
    }
}