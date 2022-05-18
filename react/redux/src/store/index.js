import { createStore } from 'redux'
import { cashReducer } from './reducers/cashReducer'

export const store = createStore(cashReducer)
