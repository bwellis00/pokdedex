import React, { Component } from 'react';


class PokeList extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      pokeList: [],
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => this.setState({ pokeList: data.results }));
  }

  changeId(id) {
   this.props.updatePokeDetail(id);
}


  render() {

    const { pokeList } = this.state;

    return ( 
    <div className="w-1/2 text-gray-700 bg-gray-300 px-4 py-2">
        <div className="flex flex-wrap -mx-2 overflow-hidden">
         {pokeList.map((pokeList, index) => {
          let imgNum = index+1; 
          imgNum = imgNum.toString();
          imgNum = imgNum.padStart(3, '0');   
          return (
            <div key={index} className="my-2 px-2 w-1/3 overflow-hidden">
              <div className="rounded bg-gray-500 hover:bg-gray-700" onClick={() => this.changeId(index+1)}>
              <img className="object-contain h-48 w-full" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + imgNum + '.png'} alt={pokeList.name}></img>
               </div>
            </div>

          )
        })}
      </div>
    </div>
  
    
    )
  }
}

export default PokeList;








