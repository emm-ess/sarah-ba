module.exports = {
    devServer: {
        open: true,
    },

    configureWebpack: config => {
        config.module.rules.push({
            test: /\.csv$/,
            loader: 'csv-loader',
            options: {
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true,
            },
        })
    // config.plugins = config.plugins.concat([
    //   new StyleLintPlugin({
    //     fix: false,
    //     files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    //   }),
    // ])
    },
}
