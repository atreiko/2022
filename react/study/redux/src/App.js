import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/actions/cash.actions';
import { addCustomerAction, removeCustomerAction } from './store/actions/customer.actions'
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = () => {
    dispatch(addCashAction(cash))
  }

  const getCash = () => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = name => {
    const customer = {
      id: Date.now(),
      name
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = customer => {
    dispatch(removeCustomerAction(customer.id))
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
        <button onClick={() => dispatch(fetchCustomers())}>Add many customers</button>
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
