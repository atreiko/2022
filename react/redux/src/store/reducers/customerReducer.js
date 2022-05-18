
const initialState = {
  customers: []
}

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return {...state, customers: state.customers + action.payload}
    case 'GET_CASH':
      return {...state, customers: state.customers - action.payload}
    default: 
      return state
  }
}