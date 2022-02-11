module.exports = {
  pages: {
    index: {
      // 入口
      entry: "src/main.js",
    },
  },
  lintOnSave:false, // 关闭语法检查
  // 开启代理服务器（方式一）
  // devServer: {
  //   // 存在弊端，只能给一个服务器配置代理
  //   proxy: "http://localhost:5000"
  // },

  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/students': {
        target: "http://localhost:5000",
        pathRewrite: {"^/students": ""},
        ws: true, // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的host值
      },
      "/cars": {
        target: "http://localhost:5001",
        pathRewrite: {"^/cars": ""},
      }
    }
  }
}