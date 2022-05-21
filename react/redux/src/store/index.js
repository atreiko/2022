import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './reducers/cash.reducer'
import { customerReducer } from './reducers/customer.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
