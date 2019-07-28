import React, { Component } from 'react'

export default class Song extends Component {
  render() {

    var favourite = false
    if (this.props.favourites.includes(this.props.videoId)) {
      favourite = true
    }

    var classname = "song"
    if (favourite) {
      classname = "song-favourite"
    }

    return (
      <div
        onClick={() => {
          this.props.changeSongFunction(this.props.url)
        }}
        className={classname}
      >
        <span onClick={() => this.props.addFavourite(this.props.videoId)} className="playButton">+</span>

        <span className="songName" style={{ fontFamily: 'Roboto' }}>
          {' '}
          {this.props.name}
        </span>
      </div>
    )
  }
}
