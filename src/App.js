import React, { Component } from 'react';
import './App.css';
import PokeList from './components/PokeList'
import PokeDetail from './components/PokeDetail'


class App extends Component {

  constructor(props) {
      super(props);
  
  
     
      this.state = {
        pokeId: 5
      };
    }

  updatePokeDetail(value){
      this.setState(
        {pokeId: value}
        );
  }

render() {

 

  return ( 
    <div className="flex bg-gray-200">
      <PokeList updatePokeDetail={this.updatePokeDetail.bind(this)} />
      <PokeDetail pokeId={this.state.pokeId} />
    </div>

  
  )
}
}

export default App;
