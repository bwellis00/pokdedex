import React, { Component } from 'react';


class PokeDetail extends Component {

    constructor(props) {
        super(props);
    
    
       
        this.state = {
          pokeData: []
        };
      }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
      .then(response => response.json())
      .then(data => this.setState({ pokeData: data.name }));
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pokeId !== prevProps.pokeId) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
        .then(response => response.json())
        .then(data => this.setState({ pokeData: data }));
    }
  }



  render() {
    let { pokeId } = this.props
    pokeId = pokeId.toString();
    pokeId = pokeId.padStart(3, '0'); 

    const {name, weight, height} = this.state.pokeData

    return ( 
    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <h1 className="text-6xl uppercase">{name}</h1>
        <img className="object-contain h-64 w-full" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokeId + '.png'}></img>
        Weight: {weight} <br></br> Height: {height}
    </div>
  
    
    )
  }
}

export default PokeDetail;








