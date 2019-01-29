import React, { Component } from 'react'
import Player from './components/Player'
import SongList from './components/SongList'
import InfoBar from './components/InfoBar'
import { hot } from 'react-hot-loader'
import './components/Style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://www.youtube.com/watch?v=Bmwdr9ZAK2I',
      playBackRate: 1,
    }
  }

  changeSongFunction = newUrl => {
    console.log('changing song...')
    this.setState({ url: newUrl })
  }

  setPlayBackRate = newRate => {
    // alert(newRate);
    this.setState({ playBackRate: newRate })
  }

  render() {
    document.body.style = 'background: #1d1d1d'

    return (
      <div>
        <InfoBar playBackRate={this.state.playBackRate} />

        <div>
          <div>
            <Player
              setPlayBackRate={this.setPlayBackRate}
              url={this.state.url}
            />
            <SongList changeSongFunction={this.changeSongFunction} />
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
