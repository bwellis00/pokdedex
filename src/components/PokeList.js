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
    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">

        <div>
        {pokeList.map((pokeList, index) =>
          <div onClick={() => this.changeId(index+1)}>{pokeList.name} - {index+1}
          </div>
        )}
      </div>
    </div>
  
    
    )
  }
}

export default PokeList;








