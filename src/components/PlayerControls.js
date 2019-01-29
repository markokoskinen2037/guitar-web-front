import React, { Component } from 'react'

export default class PlayerControls extends Component {
  render() {
    return (
      <div className="playerControls">
        <span className="commandButton" onClick={() => this.props.slowDown()}>
          speed --
        </span>
        <span className="commandButton" onClick={() => this.props.speedUp()}>
          speed ++
        </span>
        <span className="commandButton" onClick={() => this.props.toggleLoop()}>
          {this.props.loop ? 'Loop' : 'Dont loop'}
        </span>
      </div>
    )
  }
}
