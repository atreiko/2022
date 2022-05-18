# REDUX

`npm i react-redux @reduxjs/toolkit`

* react-redux - чтоб связать состояние Redux с React компонентами
* @reduxjs/toolkit - вместо redux

```
app
  src
    index.js
    App.js
    store
      reducers
        cashReducer.js
        customerReducer.js
      index.js
```

```js
src/index.js

import { Provider } from 'react-redux';
import { store } from './store';

<Provider store={store}>
  <App />
</Provider>
```

> Если в проекте один reducer
```js
src/store/index.js 

import { createStore } from 'redux'
import { cashReducer } from './reducers/cashReducer'

const store = createStore(cashReducer)
```

> Если в проекте две и более функций reducer - использовать combineReducers,
> который принимает в себя объект с ссылками на эти ф-ции
```js
src/store/index.js 

import { createStore, combineReducers } from 'redux'
import { cashReducer } from './reducers/cashReducer'
import { customerReducer } from './reducers/customerReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})

export const store = createStore(rootReducer)
```

```js
src/store/reducers/cashReducer.js

const initialState = {
  cash: 0
}

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}
    default: 
      return state
  }
}
```

> state.cash.cash  <- достаем cashReducer из поля "cash" в rootReducer
```js
src/App.js

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
```

> Для того, чтоб удобно отслеживать состояние компонентов - установить инструменты разработчика
```
npm i redux-devtools-extension
```

> Добавляем вторым параметром composeWithDevTools в createStore и вызываем ее
```js
src/store/index.js

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
```