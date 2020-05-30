module.exports = {
  css: {
    loaderOptions: {
      postcss: {

        plugins: [
          require('postcss-px2rem')({
            remUnit: 100, // 1rem等于多少px
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true
      }
    }
  }
}