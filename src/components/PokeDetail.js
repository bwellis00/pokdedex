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

    let {name, weight, height} = this.state.pokeData
    let realFeet = ((height/10)*39.370) / 12
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);

    let pounds  = weight * 0.2204622622
    pounds = Math.round(10*pounds)/10;  

  //get base stats out to create graph

    return ( 
    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <h1 className="text-6xl uppercase">{name}</h1>
        <img className="object-contain h-64 w-full" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokeId + '.png'} alt={name}></img>
        Weight: {pounds}lbs <br></br> Height: {feet}&prime; {inches}&Prime;
    </div>
  
    
    )
  }
}

export default PokeDetail;








