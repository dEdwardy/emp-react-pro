declare module '@emp/react-pro/bootstrap' {
  export {}
}
declare module '@emp/react-pro/components/Demo' {
  /// <reference types="react" />
  const Demo: () => JSX.Element
  export default Demo
}

declare module '@emp/react-pro/App' {
  /// <reference types="react" />
  const App: () => JSX.Element
  export default App
}

declare module '@emp/react-pro/pages/User/Test' {
  /// <reference types="react" />
  const Test: () => JSX.Element
  export default Test
}
declare module '@emp/react-pro/components/Hello' {
  /// <reference types="react" />
  import './common.scss'
  import './common.less'
  import './common.css'
  const Hello: () => JSX.Element
  export default Hello
}
declare module '@emp/react-pro/configs/index' {
  const _default: {
    riskHost: string
  }
  export default _default
}
declare module '@emp/react-pro' {}
declare module '@emp/react-pro' {
  import main = require('@emp/react-pro')
  export = main
}
