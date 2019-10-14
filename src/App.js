import React, { Component } from 'react';
import './App.css';
import PokeList from './components/PokeList'
import PokeDetail from './components/PokeDetail'


class App extends Component {

  constructor(props) {
      super(props);
  
  
     
      this.state = {
        pokeId: 1,
        loading: true
      };
    }

  updatePokeDetail(value){
      this.setState({
        pokeId: value,
        loading: true
        });
  }

render() {

 

  return ( 
    <div>
        <div className="flex">

          <PokeList updatePokeDetail={this.updatePokeDetail.bind(this)} />
          <PokeDetail pokeId={this.state.pokeId} loading={this.state.loading}/>
        </div>
    </div>

  
  )
}
}

export default App;
