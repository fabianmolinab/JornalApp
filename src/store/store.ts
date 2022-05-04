import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  auth: authReducer
})

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)
/* eslint-enable */
