// import applyMiddleware next to createStore
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import thunk from 'redux-thunk'
import reducers from './reducers'
import state from './state'

// add applyMiddleware(thunk)
export default createStore(reducers, state, applyMiddleware(thunk))