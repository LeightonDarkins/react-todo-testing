import { TYPES } from './TodoList.actions.js'

export const INITIAL_STATE = {
  items: [],
  selectedItemId: undefined
}

function TodoListReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.ITEM_SELECTED:
      return Object.assign({}, state, { selectedItemId: action.itemId })

    case TYPES.ADD_ITEM:
      return Object.assign({}, state, { items: [...state.items, { id: action.itemId }] })

    case TYPES.DELETE_ITEM:
      const filteredItems = state.items.filter(item => {
        return item.id !== action.itemId
      })

      return Object.assign({}, state, { items: filteredItems, selectedItemId: undefined })

    case TYPES.RESET_STATE:
      return INITIAL_STATE
  }

  return state
}

export default TodoListReducer
