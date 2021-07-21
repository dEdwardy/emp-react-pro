const path = require('path')
const packagePath = path.join(path.resolve('./'), 'package.json')
const {dependencies} = require(packagePath)

// 加入注释 让 配置支持 TS 提示
/**
 * @type {import('@efox/emp-cli').EMPConfig}
 */
module.exports = ({config, env, empEnv}) => {
  const port = 80
  const projectName = 'empReactPro'
  // const publicPath = `http://localhost:${port}`
  const publicPath = `/emp-react-jj-manage/`
  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      name: projectName,
      // remotes: {
      //   '@emp/react-pro': 'empReactPro@http://localhost:80/emp-react-jj-manage.js',
      // },
      exposes: {
        './App': 'src/App',
        './pages/User/Test': 'src/pages/User/Test',
        './pages/Login/Login': 'src/pages/Login/Login',
        './components/Hello': 'src/components/Hello',
        './helper': 'src/helper',
      },
      shared: {
        react: {eager: true, singleton: true, requiredVersion: '^17.0.1'},
        'react-dom': {eager: true, singleton: true, requiredVersion: '^17.0.1'},
      },
      // 被远程引入的文件名
      filename: 'emp.js',
    }
    return args
  })
  // 配置 index.html
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: 'EMP-React-Project-JJ-Manage',
        // 远程调用项目的文件链接
        files: {},
      },
    }
    return args
  })
}
