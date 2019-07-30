import React, { Component } from 'react'

export default class Song extends Component {
  render() {

    var favourite = false
    if (this.props.favourites.includes(this.props.videoId)) {
      favourite = true
    }

    var classname = "song"
    if (favourite) {
      classname = "song favourite"
    }

    console.log(this.props)

    return (
      <div  className={classname}>

        <img onClick={() => { this.props.changeSongFunction(this.props.url) }} className="song__image" src={"https://img.youtube.com/vi/" + this.props.videoId + "/0.jpg"} />


        <span onClick={() => this.props.addFavourite(this.props.videoId)} className="song__favouriteButton">+</span>

        <span className="song__name" style={{ fontFamily: 'Roboto' }}>{this.props.name}</span>

      </div>
    )
  }
}
