import { createStore, combineReducers } from 'redux'
import { cashReducer } from './reducers/cashReducer'
import { customerReducer } from './reducers/customerReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer
})

export const store = createStore(rootReducer)
