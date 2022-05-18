module.exports = { 
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: './src/index.tsx',
    devServer: {
        static: './public',
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                },
            },
        },
        { 
            test: /\.scss$/, 
            use: [ "style-loader", "css-loader", "sass-loader" ] 
        },
        ]
    }
}