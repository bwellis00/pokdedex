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


  render() {

    const { pokeList } = this.state;

    return ( 
    <div>
        <ul>
        {pokeList.map(pokeList =>
          <li>{pokeList.name} 
          </li>
        )}
      </ul>
    </div>
  
    
    )
  }
}

export default PokeList;








