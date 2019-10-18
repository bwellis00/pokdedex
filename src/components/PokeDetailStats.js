import React, { Component } from 'react';

class PokeDetailStats extends Component {

  render() {

    let { stats, type } = this.props

    const typeColor = {
      "normal": "#A8A77A",
      "fire":  "#EE8130",
      "water":  "#6390F0",
      "electric":  "#F7D02C",
      "grass":  "#7AC74C",
      "ice":  "#96D9D6",
      "fighting":  "#C22E28",
      "poison":  "#A33EA1",
      "ground":  "#E2BF65",
      "flying":  "#A98FF3",
      "psychic":  "#F95587",
      "bug":  "#A6B91A",
      "rock":  "#B6A136",
      "ghost":  "#735797",
      "dragon":  "#6F35FC",
      "dark":  "#705746",
      "steel":  "#B7B7CE",
      "fairy":  "#D685AD"
    }
    

    return ( 
    <div className="">
      <h2 className="text-4xl uppercase">Base Stats</h2>

      {stats.map((stats, index) => {
            //exponential smoothing for %'s. formula taken from pokedex.org
            let statPercent = -255 / Math.pow(255, 2)
            statPercent = (statPercent * Math.pow(stats.base_stat - 255, 2) + 255) / 255
            statPercent = statPercent * 100
            statPercent = statPercent.toFixed(2);
            statPercent = statPercent + "%"
             
          return (
            <div key={index} className="flex flex-wrap py-1 my-1">
              <div className="w-1/6 text-left pr-2 uppercase font-bold">{stats.stat.name}</div>
              <div className="w-5/6">
                <div className="pl-2 text-left text-white font-bold rounded-full" style={{width: statPercent, backgroundColor: typeColor[type]}}>{stats.base_stat}</div>
              </div>
            </div>

          )
      })}
        
    </div>
  
    
    )
  }
}

export default PokeDetailStats;








