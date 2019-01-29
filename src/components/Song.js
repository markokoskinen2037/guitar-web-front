import React, { Component } from 'react'

export default class Song extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.changeSongFunction(this.props.url)
        }}
        className="song"
      >
        <span className="playButton">PLAY</span>

        <span className="songName" style={{ fontFamily: 'Roboto' }}>
          {' '}
          {this.props.name}
        </span>
      </div>
    )
  }
}
