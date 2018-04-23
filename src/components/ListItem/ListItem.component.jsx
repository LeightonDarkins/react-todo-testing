import React from 'react'
import PropTypes from 'prop-types'

import './ListItem.scss'

const ListItem = ({ itemId, selected, onItemClicked }) => {
  const className = selected ? 'ListItem--selected' : 'ListItem'

  return (
    <li id={itemId}
      data-test-selector='list-item'
      className={className}
      onClick={onItemClicked}>
     Item: {itemId}
    </li>
  )
}

ListItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  selected: PropTypes.bool
}

module.exports = ListItem
