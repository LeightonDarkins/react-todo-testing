import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const AddButton = ({ label, type, small, disabled, buttonClicked }) => {
  const sizeClass = small ? 'Button--small' : ''

  const buttonClass = () => {
    switch (type) {
      case 'add':
        return `Button--${type}`
      case 'delete':
        return `Button--${type}`
      default:
        return 'Button'
    }
  }

  const cssClass = `${buttonClass()} ${sizeClass}`

  if (disabled) {
    return <button className={cssClass} disabled>{label}</button>
  } else {
    return <button className={cssClass} onClick={buttonClicked}>{label}</button>
  }
}

AddButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClicked: PropTypes.func.isRequired
}

module.exports = AddButton
