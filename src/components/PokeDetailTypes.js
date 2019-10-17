import React, { Component } from 'react';

class PokeDetailTypes extends Component {

  render() {

    let { types } = this.props

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
    <div className="flex flex-col items-center">
              {types.map((types, index) => {
             
             return (
               <div key={index} className="w-1/2 m-1 p-2 text-white uppercase" style={{backgroundColor: typeColor[types.type.name]}}>
                 {types.type.name} 
               </div>
   
             )
           })}
   
        
    </div>
  
    
    )
  }
}

export default PokeDetailTypes;








