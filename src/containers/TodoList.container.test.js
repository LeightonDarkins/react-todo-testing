/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { selector, click } from '../common/TestUtilities.js'

import TodoListReducer from '../containers/TodoList.reducer.js'
import { resetState } from '../containers/TodoList.actions.js'

import ColourList from './TodoList.container.jsx'

let wrapper
const store = createStore(TodoListReducer)

describe.only('TodoList', () => {
  wrapper = mount(
    <Provider store={store}>
      <ColourList />
    </Provider>
  )

  beforeEach(() => {
    store.dispatch(resetState())
    wrapper.update()
  })

  it('renders with no items by default', () => {
    const result = wrapper.find(selector('list')).find(selector('list-item'))

    expect(result).toHaveLength(0)
  })

  it('add two items', () => {
    click(wrapper.find(selector('add-button')), 2)

    const result = wrapper.find(selector('list'))
      .find(selector('list-item'))

    expect(result).toHaveLength(2)
  })

  it('add and item and selects it', () => {
    click(wrapper.find(selector('add-button')))

    wrapper.find(selector('list'))
      .find(selector('list-item'))
      .simulate('click')

    const result = wrapper.find(selector('list-item'))
      .find(selector('list-item'))
      .is('.ListItem--selected')

    expect(result).toBeTruthy()
  })

  it('the delete button is disabled, unless an item is selected', () => {
    let deleteButton = wrapper.find(selector('delete-button'))

    expect(deleteButton.props().disabled).toBeTruthy()

    click(wrapper.find(selector('add-button')))
    click(wrapper.find(selector('list-item')))

    deleteButton = wrapper.find(selector('delete-button'))

    expect(deleteButton.props().disabled).toBeFalsy()
  })

  it('adds two items, selects one and deletes it', () => {
    click(wrapper.find(selector('add-button')), 2)

    click(wrapper.find(selector('list-item')).at(0))

    click(wrapper.find(selector('delete-button')))

    expect(wrapper.find(selector('list-item'))).toHaveLength(1)
  })

  it('adds 3 items, deletes two and resets the state', () => {
    const deleteButton = wrapper.find(selector('delete-button'))
    const addButton = wrapper.find(selector('add-button'))

    click(addButton, 3)

    click(wrapper.find(selector('list-item')).at(0))
    click(deleteButton)

    click(wrapper.find(selector('list-item')).at(0))
    click(deleteButton)

    click(wrapper.find(selector('reset-button')))

    expect(wrapper.find(selector('list-item'))).toHaveLength(0)
  })
})
