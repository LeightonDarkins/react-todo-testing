import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem/ListItem.component.jsx'

import './List.css'

const List = (props) => {
  const onItemClicked = (event) => {
    if (!event.target.id) return

    props.itemClicked(event.target.id)
  }

  const itemIsSelected = (item) => {
    return props.selectedItemId === item.id
  }

  const renderListItems = () => (
    props.items.map(item =>
      (
        <ListItem
          key={item.id}
          itemId={item.id}
          selected={itemIsSelected(item)}
          onItemClicked={onItemClicked} />
      )
    )
  )

  return (<ul className='List'>{ renderListItems() }</ul>)
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemClicked: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string
}

module.exports = List
