import React from 'react'

class ClockContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = { time: props.time }
    this.updateTime = this.updateTime.bind(this)
  }

  componentDidMount () {
    this.interval = setInterval(this.updateTime, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  updateTime () {
    this.setState({
      time: new Date(this.state.time.getTime() + 1000)
    })
  }

  render () {
    const clockProperties = {
      hours: this.state.time.getHours(),
      minutes: this.state.time.getMinutes(),
      seconds: this.state.time.getSeconds()
    }

    return (
      <div>
        { this.props.render(clockProperties) }
      </div>
    )
  }
}

export default ClockContainer
