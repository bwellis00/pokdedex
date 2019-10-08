import React, { Component } from 'react';


class PokeDetail extends Component {

    constructor(props) {
        super(props);
    
    
       
        this.state = {
          pokeData: ""
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
        .then(data => this.setState({ pokeData: data.name }));
    }
  }



  render() {

   

    return ( 
    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        {this.state.pokeData}
    </div>
  
    
    )
  }
}

export default PokeDetail;








