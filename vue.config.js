module.exports = {
    publicPath: '/docs',
    outputDir: 'docs',
    devServer: {
        proxy: {
            '/v1/api': {
                target: 'http://localhost:8080'
            }
        } 
    }
}