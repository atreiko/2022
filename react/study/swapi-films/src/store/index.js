import { createStore, applyMiddleware } from 'redux'
import { favoritesReducer } from './reducers/favorites.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { setLocalStorage } from '../utils/localStorage'

export const store = createStore(
  favoritesReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorites)
})