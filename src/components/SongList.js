import React, { Component } from 'react'
import Song from './Song'

export default class SongList extends Component {
  render() {
    //Get data from backend...

    const songs = [
      {
        url: 'https://www.youtube.com/watch?v=NhVujencTRs',
        name: 'Imagine all the people',
      },
      {
        url: 'https://www.youtube.com/watch?v=Ova4lMS19zg',
        name: "He's a pirate",
      },
      {
        url: 'https://www.youtube.com/watch?v=Ib_wXUCU2Vw',
        name: 'Melissa',
      },
      {
        url: 'https://www.youtube.com/watch?v=XyJ6qzHXVqE',
        name: 'One punch man',
      },
      {
        url: 'https://www.youtube.com/watch?v=2J7a7PQWtgA',
        name: 'Nanatsu no Taizai',
      },
      {
        url:
          'https://www.youtube.com/watch?v=NVvyVLsM4r4&index=5&list=RD2J7a7PQWtgA',
        name: 'Goku vs. Jiren',
      },
      {
        url:
          'https://www.youtube.com/watch?v=Wte2TLe4wMw&index=11&list=RD2J7a7PQWtgA',
        name: 'Fur Elise',
      },
      {
        url:
          'https://www.youtube.com/watch?v=j9QQqq4JLKQ&index=13&list=RD2J7a7PQWtgA',
        name: 'Mirai nikki',
      },
      {
        url:
          'https://www.youtube.com/watch?v=njMUxAFRUhk&index=16&list=RD2J7a7PQWtgA',
        name: 'Requiem for a Dream',
      },
      {
        url: 'https://www.youtube.com/watch?v=ZDxxM1i3vPo',
        name: 'The World',
      },
      {
        url: 'https://www.youtube.com/watch?v=QT038gyTNtI',
        name: 'Hotel California',
      },
      {
        url:
          'https://www.youtube.com/watch?v=-oHJdNuAr0M&list=RDNVvyVLsM4r4&index=12',
        name: 'Fairy tail OST',
      },
      {
        url:
          'https://www.youtube.com/watch?v=RTYEWHMomfg&list=RDNVvyVLsM4r4&index=19',
        name: 'Vegeta new Form',
      },
      {
        url: 'https://www.youtube.com/watch?v=hWkq66R0bWk',
        name: 'Canon in D',
      },
      {
        url: 'https://www.youtube.com/watch?v=sE5CGdlaiDQ',
        name: 'Boulevard of BD',
      },
      {
        url: 'https://www.youtube.com/watch?v=SmCcsE1SrKg',
        name: 'Radioactive',
      },
      {
        url: 'https://www.youtube.com/watch?v=65HidYKtwxU',
        name: 'Megalovania',
      },
      {
        url: 'https://www.youtube.com/watch?v=unvgDJWt5hU',
        name: 'All of me',
      },
      {
        url: 'https://www.youtube.com/watch?v=YVdMS9iUHgM',
        name: 'Halleluja',
      },
      {
        url: 'https://www.youtube.com/watch?v=YtoVuBgWJHI',
        name: 'Dont stop me now',
      },
    ]

    return (
      <div className="songcontainer">
        {songs.map(song => {
          return (
            <Song
              key={song.name}
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
