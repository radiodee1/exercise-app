module.exports = {
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true
      }
    },
    devServer: {
      disableHostCheck: true,
      host: "localhost"
    },
    chainWebpack: config => config.resolve.symlinks(false),
    
    outputDir: '../docs'
  }