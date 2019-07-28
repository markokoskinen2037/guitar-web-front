import React, { Component } from 'react'
import Song from './Song'

export default class SongList extends Component {

  constructor(props){
    super(props)
    this.state = {
      filter: ""
    }
  }


  render() {

    const filteredList = this.props.playBackList.filter(song => {
      if(song.name.toLowerCase().includes(this.state.filter.toLowerCase())){
        return true
      } else {
        return false
      }
    })


    return (
      <div className="songcontainer">
        <div className="songSearchContainer"><span>Search for a song </span><input value={this.state.filter} onChange={(e) => this.setState({filter:e.target.value})}></input></div>
        {filteredList.map(song => {
          return (
            <Song
              key={song.name + (Math.random()*1000000).toString()}
              url={song.url}
              changeSongFunction={this.props.changeSongFunction}
              name={song.name}
            />
          )
        })}
      </div>
    )
  }
}
