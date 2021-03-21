module.exports = {
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true
      }
    },
    devServer: {
      disableHostCheck: true
    },
    chainWebpack: config => config.resolve.symlinks(false),
    
    outputDir: '../docs'
  }