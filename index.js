module.exports = (api, projectOptions) => {
  api.chainWebpack(config => {
    config
      .entry('app')
      .delete('./src/main.js')
      .add('./src/index.js')
      .end()

    config.module
      .rule('babel')
      .test(/\.js?$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()

    config.resolve.delete('vue-loader')
    config.resolve.delete('vue-loader')
    config.module.rules.delete('vue');
    config.module.rule('css').oneOfs.delete('vue-modules');
    config.module.rule('css').oneOfs.delete('vue');
    config.module.rule('postcss').oneOfs.delete('vue-modules');
    config.module.rule('postcss').oneOfs.delete('vue');
    config.module.rule('scss').oneOfs.delete('vue-modules');
    config.module.rule('scss').oneOfs.delete('vue');
    config.module.rule('sass').oneOfs.delete('vue-modules');
    config.module.rule('sass').oneOfs.delete('vue');
    config.module.rule('less').oneOfs.delete('vue-modules');
    config.module.rule('less').oneOfs.delete('vue');
    config.module.rule('stylus').oneOfs.delete('vue-modules');
    config.module.rule('stylus').oneOfs.delete('vue');
    config.plugins.delete('vue-loader');
  })

  api.registerCommand(
    'config', {
      description: 'test',
      usage: 'vue-cli-service config',
      options: {}
    },
    () => {
      console.log(projectOptions)
    }
  )
}