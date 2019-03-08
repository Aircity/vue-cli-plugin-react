module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .entry('app')
      .delete('./src/main.js')
      .add('./src/index.js')
      .end()

    webpackConfig.module
      .rule('babel')
      .test(/\.js?$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()

    webpackConfig.resolve.delete('vue-loader')
  })

  api.registerCommand(
    'config',
    {
      description: 'test',
      usage: 'vue-cli-service config',
      options: {}
    },
    () => {
      console.log(projectOptions)
    }
  )
}
