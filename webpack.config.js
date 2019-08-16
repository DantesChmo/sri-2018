const path = require('path');

const applicationEntry = path.resolve('src/client/index.ts');
const applicationOutput = path.resolve('out/client');

module.exports = {
    entry: applicationEntry,
    output: {
        path: applicationOutput,
        filename: '[name].js'
    },
    mode: 'development',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.post.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
};
