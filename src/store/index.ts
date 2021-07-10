import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './user'
import rootSaga from './saga'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
}
// generate
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const reduers = combineReducers({
  user: reducer,
})

const persistedReducer = persistReducer(persistConfig, reduers)
// const store = createStore(reduers, composeEnhancers(applyMiddleware()))

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const store: any = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

export default store
