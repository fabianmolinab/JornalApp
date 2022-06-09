import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer'

/* Redux Developer Tools
* Configuración  para que funcione el Redux DevTools con Typescript
*/

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
