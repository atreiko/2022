import { ADD_CASH, GET_CASH } from '../constants/cash.constants'

export const addCashAction = payload => ({
  type: ADD_CASH,
  payload
})

export const getCashAction = payload => ({
  type: GET_CASH,
  payload
})