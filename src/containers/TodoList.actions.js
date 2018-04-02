const TYPES = {
  ITEM_SELECTED: 'ITEM_SELECTED',
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  RESET_STATE: 'RESET_STATE'
}

const itemSelected = (itemId) => {
  return {
    type: TYPES.ITEM_SELECTED,
    itemId
  }
}

const addItem = (itemId) => {
  return {
    type: TYPES.ADD_ITEM,
    itemId
  }
}

const deleteItem = (itemId) => {
  return {
    type: TYPES.DELETE_ITEM,
    itemId
  }
}

const resetState = () => {
  return { type: TYPES.RESET_STATE }
}

module.exports = {
  itemSelected,
  addItem,
  deleteItem,
  resetState,
  TYPES
}
