import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PlayerControls from './PlayerControls'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = { playbackRate: 1, loop: true }
  }

  slowDown = () => {
    var newRate = this.state.playbackRate - 0.25

    if (newRate > 0) {
      this.setState({ playbackRate: newRate })
      this.props.setPlayBackRate(newRate)
    } else {
      console.log('error')
    }
  }

  speedUp = () => {
    var newRate = this.state.playbackRate + 0.25

    if (newRate <= 2) {
      this.setState({ playbackRate: newRate })
      this.props.setPlayBackRate(newRate)
    } else {
      console.log('error')
    }
  }

  toggleLoop = () => {
    if (this.state.loop) {
      this.setState({ loop: false })
    } else {
      this.setState({ loop: true })
    }
    console.log('loop set')
  }

  render() {
    return (
      <div id ="player">
        <ReactPlayer
          url={this.props.url}
          playing
          loop={this.state.loop}
          controls
          playbackRate={this.state.playbackRate}
          width="100%"
          height="600px"
        />
        <PlayerControls
          loop={this.state.loop}
          slowDown={this.slowDown}
          speedUp={this.speedUp}
          toggleLoop={this.toggleLoop}
        />
      </div>
    )
  }
}
