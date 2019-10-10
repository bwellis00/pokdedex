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
    <div>
        <div className="flex">

          <PokeList updatePokeDetail={this.updatePokeDetail.bind(this)} />
          <PokeDetail pokeId={this.state.pokeId} />
        </div>
    </div>

  
  )
}
}

export default App;
