import React from "react";
import PokeList from "./PokeList";
import data from "../data/pokemons.json";

import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: data,
    };
  }

  render() {
    return (
      <div>
        <PokeList pokemons={this.state.pokemons} />;
      </div>
    );
  }
}

export default App;
