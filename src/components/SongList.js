import React, { Component } from 'react'
import Song from './Song'

export default class SongList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: ""
    }
  }


  render() {

    const filteredList = this.props.playBackList.filter(song => {
      if (song.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
        return true
      } else {
        return false
      }
    })

    return (
      <div className="songcontainer">
        <div className="songSearchContainer"><span>Search for a song ({this.props.playBackList.length}) </span><input value={this.state.filter} onChange={(e) => this.setState({ filter: e.target.value })}></input></div>
        {filteredList.map(song => {

          return (
            <Song
              key={song.name + (Math.random() * 1000000).toString()}
              url={song.url}
              changeSongFunction={this.props.changeSongFunction}
              addFavourite={this.props.addFavourite}
              favourites={this.props.favourites}
              videoId={song.videoId}
              name={song.name}
            />
          )
        })}
      </div>
    )
  }
}
