import React from 'react'
import PropTypes from 'prop-types'

function LargeClock ({hours, minutes, seconds}) {
  return (
    <div style={{fontSize: '50px', backgroundColor: 'red'}}>
      {hours} : {minutes} : {seconds}
    </div>
  )
}

LargeClock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}

export default LargeClock
