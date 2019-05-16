import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'

// With localStorage, the state will persisted after refreshing the web page.
const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

// In case of performance issue, because subscribe() calls
// every time the state has change and saveState() use JOSN.stringify() which
// is a expensive operation.
// So using lodash/throttle to make sure only 1 function calling per second.
store.subscribe(throttle(() => {
  // Save all the state to localStorage.
  // saveState(store.getState())
  // Save only data state like `todos` but not ui state like `visibilityFilter`.
  saveState({
    'todos': store.getState().todos
  })
}, '1000'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
