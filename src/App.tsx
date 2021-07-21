import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home/Home'
import {Provider} from 'react-redux'
import store, {persistor} from './store'
import {Login} from './pages/Login/Login'
import {PersistGate} from 'redux-persist/integration/react'
// const App = () => (
//   <>
//     <Hello compiler="TypeScript 2" framework="React Project" />
//     <div style={{backgroundColor: '#eee', padding: '20px'}}>
//       <h2>remote import load one!!</h2>
//       <HelloDEMO />
//       <h2>remote lazy load</h2>
//       <Suspense fallback={<div />}>
//         <Hello2 />
//       </Suspense>
//       process.env.EMP_ENV:{process.env.EMP_ENV}
//       <p>config:{JSON.stringify(config.default)}</p>
//     </div>
//   </>
// )
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename="./emp-react-jj-manage">
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route path="/" component={Home}></Route>
            <Route path="*" render={() => '404'}></Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}
export default App
