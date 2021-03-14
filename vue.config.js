module.exports = {
    css: {
        requireModuleExtension: false
    },
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => config.resolve.symlinks(false)
}