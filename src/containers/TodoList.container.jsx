import React from 'react'
import { connect } from 'react-redux'

import List from '../components/List/List.component.jsx'
import Button from '../components/Button/Button.component.jsx'

import { itemSelected, addItem, deleteItem, resetState } from './TodoList.actions.js'

import './TodoList.scss'

const ColourList = (props) => {
  const deleteButtonIsDisabled = !props.selectedItemId

  return (
    <div className='ColourList'>
      <List
        data-test-selector='list'
        items={props.items}
        selectedItemId={props.selectedItemId}
        itemClicked={props.itemClicked} />
      <div className='ColourList__buttons'>
        <Button
          data-test-selector='add-button'
          buttonClicked={props.buttonClicked}
          type='add'
          label='Add Item'
          small />
        <Button
          data-test-selector='reset-button'
          buttonClicked={props.resetState}
          label='Reset State'
          small />
      </div>
      <Button
        data-test-selector='delete-button'
        buttonClicked={() => { props.deleteItem(props.selectedItemId) }}
        type='delete'
        label='Remove Selected Item'
        disabled={deleteButtonIsDisabled} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    selectedItemId: state.selectedItemId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    itemClicked: (id) => dispatch(itemSelected(id)),
    buttonClicked: () => {
      const id = Math.random().toString(36).substr(2, 16)

      dispatch(addItem(id))
    },
    deleteItem: (id) => dispatch(deleteItem(id)),
    resetState: () => dispatch(resetState())
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ColourList)
