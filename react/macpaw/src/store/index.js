import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import likesSlice from './slices/likes.slice'
import favouritesSlice from './slices/favourites.slice'
import dislikesSlice from './slices/dislikes.slice'
import reactionsSlice from './slices/reactions.slice'

const rootReducer = combineReducers({
  likes: likesSlice,
  favourites: favouritesSlice,
  dislikes: dislikesSlice,
  reactions: reactionsSlice
})

const persistConfog = {
  key: 'root',
  storage
  // balcklist for API's
}

const persistedReducer = persistReducer(persistConfog, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})

export const persistor = persistStore(store)
export default store