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

> Если в проекте две и более функций reducer - использовать combineReducers
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