import { ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER} from '../constants/customer.constants'

const initialState = {
  customers: []
}

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    case ADD_MANY_CUSTOMERS: 
      return {...state, customers: [...state.customers, ...action.payload]}
    default: 
      return state
  }
}