module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'httl://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}