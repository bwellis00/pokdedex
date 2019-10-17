import React, { Component } from 'react';
import Loading from './Loading';
import PokeDetailStats from './PokeDetailStats';
import PokeDetailTypes from './PokeDetailTypes';

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
        this.setState({loading: this.props.loading}) 
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

    let {name, weight, height, stats, types} = this.state.pokeData
    let realFeet = ((height/10)*39.370) / 12
    let feet = Math.floor(realFeet)
    let inches = Math.round((realFeet - feet) * 12)

    let pounds  = weight * 0.2204622622
    pounds = Math.round(10*pounds)/10; 

    console.log(loading)
    


    return ( 
    <div className="w-1/2 text-gray-700 text-center bg-gray-400 px-4 py-2 fixed bottom-0 right-0 h-screen">
        { loading ? <Loading /> : <div><h1 className="text-6xl uppercase">{name}</h1>
        <img className="object-contain h-64 w-full" src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokeId + '.png'} alt={name} />
        <div className="flex">
          <div className="w-1/3">
              <h2 className="text-4xl uppercase">Weight</h2>
              <p className="text-2xl">{pounds}lbs</p>
          </div>
          <div className="w-1/3">
              <h2 className="text-4xl uppercase">Height</h2>
              <p className="text-2xl">{feet}&prime; {inches}&Prime;</p>
          </div>
          <div className="w-1/3">
              <h2 className="text-4xl uppercase">Types</h2>
              <PokeDetailTypes types={types}/>
          </div>
        </div>
 
        


        <PokeDetailStats stats={stats} />
        
        </div>}


        
    </div>
  
    
    )
  }
}

export default PokeDetail;








