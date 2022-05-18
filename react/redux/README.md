# REDUX

`npm i react-redux @reduxjs/toolkit`

> react-redux - чтоб связать состояние Redux с React компонентами
> @reduxjs/toolkit вместо redux

Folder structure:
```
app
  src
    index.js
    App.js
    index.css
  store
    reducers
      cashReducer.js
      customerReducer.js
    index.js
```

```js
store/index.js 

import { createStore } from 'redux'
import { cashReducer } from './reducers/cashReducer'

const store = createStore(cashReducer)
```

```js
src/index.js

import { Provider } from 'react-redux';
import { store } from './store';

  <Provider store={store}>
    <App />
  </Provider>
```