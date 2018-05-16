import React from 'react'

var addCounting = (Component) => {
  class withCounting extends React.Component {
    constructor (props) {
      super(props)

      this.state = { time: new Date() }
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

      return <Component {...clockProperties} />
    }
  }

  return withCounting
}

export default addCounting
