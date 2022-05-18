import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 5 })
  }

  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: 5 })
  }

  return (
    <div>
      <div>
        <button onClick={() => addCash()}>Add cash</button>
        {cash}
        <button onClick={() => getCash()}>Get cash</button>
      </div>
    </div>
  );
}

export default App;
