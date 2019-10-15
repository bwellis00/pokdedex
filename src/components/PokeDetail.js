import React, { Component } from 'react';
import Loading from './Loading';
import PokeDetailStats from './PokeDetailStats';

class PokeDetail extends Component {

    constructor(props) {
        super(props);
    
    
       
        this.state = {
          pokeData: [],
          loading: this.props.loading,
        };
      }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
      .then(response => response.json())
      .then(data => this.setState({ pokeData: data, loading: false }));
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pokeId !== prevProps.pokeId) {
        this.setState.loading = this.props.loading
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeId)
        .then(response => response.json())
        .then(data => this.setState({ pokeData: data, loading: false }));
    }
  }



  render() {
    let { pokeId } = this.props
    pokeId = pokeId.toString()
    pokeId = pokeId.padStart(3, '0')

    let { loading } = this.state

    let {name, weight, height, stats} = this.state.pokeData
    let realFeet = ((height/10)*39.370) / 12
    let feet = Math.floor(realFeet)
    let inches = Math.round((realFeet - feet) * 12)

    let pounds  = weight * 0.2204622622
    pounds = Math.round(10*pounds)/10; 

    


    return ( 
    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        { loading ? <Loading /> : <div><h1 className="text-6xl uppercase">{name}</h1>
        <img className="object-contain h-64 w-full" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokeId + '.png'} alt={name} />
        Weight: {pounds}lbs <br></br> Height: {feet}&prime; {inches}&Prime;<br></br><br></br>
        
        <PokeDetailStats stats={stats} />
        
        </div>}


        
    </div>
  
    
    )
  }
}

export default PokeDetail;








