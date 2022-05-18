import { ADD_CUSTOMER, REMOVE_CUSTOMER} from '../constants/customer.constants'

export const addCustomerAction = payload => ({
  type: ADD_CUSTOMER,
  payload
})

export const removeCustomerAction = payload => ({
  type: REMOVE_CUSTOMER,
  payload
})