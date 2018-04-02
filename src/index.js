import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoListReducer from './containers/TodoList.reducer.js'
import TodoList from './containers/TodoList.container.jsx'

let store = createStore(TodoListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
