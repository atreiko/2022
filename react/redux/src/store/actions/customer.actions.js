import { ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER} from '../constants/customer.constants'

export const addCustomerAction = payload => ({
  type: ADD_CUSTOMER,
  payload
})

export const removeCustomerAction = payload => ({
  type: REMOVE_CUSTOMER,
  payload
})

export const addManyCustomersAction = payload => ({
  type: ADD_MANY_CUSTOMERS,
  payload
})