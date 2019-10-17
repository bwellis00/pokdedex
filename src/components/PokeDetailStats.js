import React, { Component } from 'react';

class PokeDetailStats extends Component {

  render() {

    let { stats } = this.props

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
            <div key={index} className="my-2 p-2 text-left bg-red-500 uppercase" style={{width: statPercent}}>
              {stats.stat.name} - {stats.base_stat}
            </div>

          )
        })}
        
    </div>
  
    
    )
  }
}

export default PokeDetailStats;








