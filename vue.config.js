module.exports = {
    publicPath: '/cosmo-home',
    outputDir: 'docs',
    devServer: {
        proxy: {
            '/v1/api': {
                target: 'http://localhost:8080'
            }
        } 
    }
}