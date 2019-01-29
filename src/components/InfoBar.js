import React, { Component } from 'react'

export default class InfoBar extends Component {
  setMessage = () => {}

  goFullscreen() {
    console.log('aaaaaaaaaa')
    document.documentElement.requestFullscreen()
  }

  render() {
    return (
      <div className="navBar">
        <span style={{ float: 'left' }}>
          Speed : {this.props.playBackRate}{' '}
        </span>
        <span>Guitar Tracker</span>
        <span
          onClick={() => {
            this.goFullscreen()
          }}
          style={{
            marginLeft: 10,
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Go fullscreen
        </span>
        <span className="loginButton">login</span>
      </div>
    )
  }
}
