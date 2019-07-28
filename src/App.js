/* global gapi */
import React, { Component } from 'react'
import Player from './components/Player'
import SongList from './components/SongList'
import InfoBar from './components/InfoBar'
import { hot } from 'react-hot-loader'
import './components/Style.css'

class App extends Component {
  constructor(props) {

    super(props)
    this.toggleFavourite = this.toggleFavourite.bind(this)

    this.state = {
      url: 'https://www.youtube.com/watch?v=Bmwdr9ZAK2I',
      playBackRate: 1,
      playBackList: [],
      favourites: []
    }
  }

  changeSongFunction = newUrl => {
    this.setState({ url: newUrl })
    const element = document.getElementById("player")
    element.scrollIntoView()
  }


  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey("AIzaSyCXai2x2-AsZXdlMiBldOzhvaI-6eCkgyE");
        gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true });
          this.getSongListFromGoogle()
        });
      });
    };

    document.body.appendChild(script);
  }

  setPlayBackRate = newRate => {
    this.setState({ playBackRate: newRate })
  }

  componentDidMount() {
    this.loadYoutubeApi();
  }

  getSongListFromGoogle(pageToken) {

    var request = {
      "part": "snippet",
      "maxResults": 50,
      "playlistId": "UUi5EIu8SCZ0DV-Gdui4QDiA"
    }

    if (pageToken) {
      request.pageToken = pageToken
    }


    return gapi.client.youtube.playlistItems.list(request)
      .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        //console.log("Response", response);

        var temp = this.state.playBackList

        response.result.items.forEach(item => {
          const videoId = item.snippet.resourceId.videoId
          const title = item.snippet.title
          const url = "https://www.youtube.com/watch?v=" + videoId

          const dataObject = {
            url: url,
            name: title,
            videoId: videoId
          }

          temp.push(dataObject)
        });

        this.setState({ playBackList: temp })

        const pageToken = response.result.nextPageToken
        if (pageToken) {
          this.getSongListFromGoogle(pageToken)
        }


      }.bind(this),
        function (err) { console.error("getSongListFromGoogle error", err); });
  }

  toggleFavourite(videoId) {

    var exists = false
    if (this.state.favourites.includes(videoId)) {
      exists = true
    }


    let favs = this.state.favourites

    if (exists) {
      favs = favs.filter(element => element !== videoId)
    } else {
      favs.push(videoId)
    }



    this.setState({
      favourites: favs
    })
  }


  render() {
    document.body.style = 'background: #1d1d1d'

    return (
      <div>
        <InfoBar playBackRate={this.state.playBackRate} />

        <div>
          <div>
            <Player
              id="player"
              setPlayBackRate={this.setPlayBackRate}
              url={this.state.url}
            />
            <SongList playBackList={this.state.playBackList} favourites={this.state.favourites} addFavourite={this.toggleFavourite} changeSongFunction={this.changeSongFunction} />
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
