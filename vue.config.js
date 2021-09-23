module.exports = {
  publicPath: "./",
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  // 强制内联 CSS
  css: {
    extract: false
  }
}