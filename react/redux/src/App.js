import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)

  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 5 })
  }

  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: 5 })
  }

  const addCustomer = name => {
    const customer = {
      id: Date.now(),
      name
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: customer })
  }

  const removeCustomer = customer => {
    dispatch({ type: 'REMOVE_CUSTOMER', payload: customer.id })
  }

  return (
    <div>
      <div>
        <button onClick={() => addCash()}>Add cash</button>
        {cash}
        <button onClick={() => getCash()}>Get cash</button>
      </div>
      <div>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => removeCustomer()}>Remove customer</button>
      </div>
      {
        customers.length > 0 ?
        <div>
          {
            customers?.map(customer => (
              <div onClick={() => removeCustomer(customer)} key={customer.id}>
                {customer.name}
              </div>
            ))
          }
        </div>
        : 
        <div>
          There are no customers
        </div>
      }
    </div>
  );
}

export default App;
