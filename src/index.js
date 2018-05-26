import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoListReducer from './containers/TodoList.reducer.js'
import TodoList from './containers/TodoList.container.jsx'
import ClockContainer from './containers/ClockContainer/ClockContainer.jsx'
import SmallClock from './components/Clock/SmallClock.jsx'
import LargeClock from './components/Clock/LargeClock.jsx'
import addCounting from './components/Clock/HOC.jsx'
import { CheckBox, StatefulCheckBox } from 'leightondarkins-react-library'

let store = createStore(TodoListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const SmallClockWithCounting = addCounting(SmallClock)
const LargeClockWithCounting = addCounting(LargeClock)

const App = () => {
  return (
    <div>
      <TodoList />
      <ClockContainer time={new Date()} render={(props) => <SmallClock {...props} />} />
      <ClockContainer time={new Date()} render={(props) => <LargeClock {...props} />} />
      <SmallClockWithCounting />
      <LargeClockWithCounting />
      <CheckBox label='test' onChange={() => {}} checked />
      <StatefulCheckBox label='test' onChange={() => {}} />
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
