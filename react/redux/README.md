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
      actions
        cash.actions.js
        customer.actions.js
      constants
        cash.constants.js
        customer.constants.js
      reducers
        cash.reducer.js
        customer.reducer.js
      index.js
```
---
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
  customers: customerReducer
})

export const store = createStore(rootReducer)
```

---

## CASH работа с объектом

1. Создать initialState
2. Создать ф-цию reducer, которая принимает state, action
3. Прописываем actions в switch case
4. Всегда разворачиваем в state новый payload
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

1. state.cash.cash  <- достаем cashReducer из поля "cash" в rootReducer
2. Пишем ф-ции, которые диспатчат action и payload
3. Прикручиваем к кнокам ф-ции
4. Инициализирую состояние cash в рендере
```js
src/App.js

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  return (
    <div>
      <button onClick={() => addCash()}>Add cash</button>
      {cash}
      <button onClick={() => getCash()}>Get cash</button>
    </div>
  );
}
```

Для того, чтоб удобно отслеживать состояние компонентов - установить инструменты разработчика
```
npm i redux-devtools-extension
```

Добавляем вторым параметром ф-ию composeWithDevTools в createStore и вызываем ее
```js
src/store/index.js

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
```

Устанавливаем для браузера Redux DevTools
```
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru
```

Создаем constants для types
```js
src/store/constants/cash.constants.js

export const ADD_CASH = 'ADD_CASH'
export const GET_CASH = 'GET_CASH'
```

Создаем actions
1. Импортируем константы
2. Ф-ии принимают payload и возвращают объект type и payload
```js
src/store/actions/cash.actions.js

import { ADD_CASH, GET_CASH } from '../constants/cash.constants'

export const addCashAction = payload => ({
  type: ADD_CASH,
  payload
})

export const getCashAction = payload => ({
  type: GET_CASH,
  payload
})
```

Прокидываем actions в discpatch
```js
src/App.js
import { addCashAction, getCashAction } from './store/actions/cash.actions';

const addCash = () => {
  dispatch(addCashAction(cash))
}

const getCash = () => {
  dispatch(getCashAction(cash))
}
```

---

## CUSTOMERS работа с массивом

1. Создаем initialState
2. Создаем ф-цию reducer, которая принимает state, action
3. Прописываем actions в switch case
4. Всегда разворачиваем в state новый payload
5. Фильтруем по ID, которое принимаем в payload для удаления
```js
src/store/reducers/customerReducer.js

const initialState = {
  customers: []
}

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    default: 
      return state
  }
}
```

1. Читаем состояние через useSelector
2. Ф-ция создать customer, которая аргументом принимает name
3. Ф-ция удалить, которая принимает в себя customer.id
4. Рендерим и вешаем ф-ии
```js
src/App.js

import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch()
const customers = useSelector(state => state.customers.customers)

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

<>
  <div>
    <button onClick={() => addCustomer(prompt())}>Add customer</button>
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
</>
```

```js
src/store/actions/customer.actions.js

export const addCustomerAction = payload => ({
  type: ADD_CUSTOMER,
  payload
})

export const removeCustomerAction = payload => ({
  type: REMOVE_CUSTOMER,
  payload
})
```

Вставляем наши actions в dispatch
```js
src/App.js

const addCustomer = name => {
  const customer = {
    id: Date.now(),
    name
  }
  dispatch(addCustomerAction(customer))
}

const removeCustomer = customer => {
  dispatch(removeCustomer(customer.id))
}
```

---

## fetch CUSTOMERS. THUNK middleware 

`npm i redux-thunk`

1. Импортировать applyMiddleware, thunk
2. Прокидываем applyMiddleware(thunk) в composeWithDevTools()
```js
src/store/index.js

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
```

Для получение customers: `https://jsonplaceholder.typicode.com/users`

```js
src/store/constants/customer.constants.js

export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
```

```js
src/store/reducers/customer.reducer.js

case ADD_MANY_CUSTOMERS: 
  return {...state, customers: [...state.customers, ...action.payload]}
```

```js
src/store/actions/customer.action.js

export const addManyCustomersAction = payload => ({
  type: ADD_MANY_CUSTOMERS,
  payload
})
```

Создаем папку asyncActions в src
```
app
  src
    index.js
    App.js
    store
    asyncActions
      customers.js
```

1. Ипортируем addManyCustomersAction
2. Ф-я, возвращает ф-ю, которая принимает в себя dispatch
3. Получаем список
4. В dispatch прокидываем наш action, который принимает в себя результат запроса
```js
src/asyncActions/customers.js

import { addManyCustomersAction } from '../store/actions/customer.actions'

export const fetchCustomers = () => {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)))
  }
}
```

1. Импортируем fetchCustomers
2. Вешаем на нажатие книпки dispatch, который принимает в себя fetchCustomers
3. Рендерим customers: []
```js
src/App.js

import { fetchCustomers } from './asyncActions/customers';

<>
  <div>
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
</>
```