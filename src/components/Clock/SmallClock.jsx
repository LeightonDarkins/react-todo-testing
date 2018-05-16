import React from 'react'
import PropTypes from 'prop-types'

function SmallClock ({hours, minutes, seconds}) {
  return (
    <div style={{fontSize: '20px', backgroundColor: 'green'}}>
      {hours} : {minutes} : {seconds}
    </div>
  )
}

SmallClock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}

export default SmallClock
