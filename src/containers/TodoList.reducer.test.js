/* eslint-env jest */

import reducer, { INITIAL_STATE } from './TodoList.reducer.js'
import { resetState, itemSelected, addItem, deleteItem } from './TodoList.actions.js'

describe('ColourList Reducer', () => {
  it('returns initial state when state is not defined', () => {
    const output = reducer(undefined, {})

    expect(output).toEqual(INITIAL_STATE)
  })

  it('returns initial state for the RESET_STATE action', () => {
    const currentState = {
      items: [{ id: 'id-1' }],
      selectedItemId: 'current-item-id'
    }

    const output = reducer(currentState, resetState())

    expect(output).toEqual(INITIAL_STATE)
  })

  it('selects the given item for ITEM_SELECTED', () => {
    const currentState = {
      items: [{ id: 'id-1' }],
      selectedItemId: 'current-item-id'
    }

    const expectedState = {
      items: [{ id: 'id-1' }],
      selectedItemId: 'test-item-id'
    }

    const output = reducer(currentState, itemSelected('test-item-id'))

    expect(output).toEqual(expectedState)
  })

  it('adds a new item for ADD_ITEM', () => {
    const currentState = {
      items: [{ id: 'id-1' }],
      selectedItemId: 'current-item-id'
    }

    const expectedState = {
      items: [{ id: 'id-1' }, { id: 'test-item-id' }],
      selectedItemId: 'current-item-id'
    }

    const output = reducer(currentState, addItem('test-item-id'))

    expect(output).toEqual(expectedState)
  })

  it('removes an item for DELETE_ITEM', () => {
    const currentState = {
      items: [{ id: 'id-1' }],
      selectedItemId: 'current-item-id'
    }

    const expectedState = {
      items: [],
      selectedItemId: undefined
    }

    const output = reducer(currentState, deleteItem('id-1'))

    expect(output).toEqual(expectedState)
  })
})
