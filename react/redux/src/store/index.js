import { createStore, combineReducers } from 'redux'
import { cashReducer } from './reducers/cash.reducer'
import { customerReducer } from './reducers/customer.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
