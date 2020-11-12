import React from "react";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    // console.log(pokemons);
    return (
      <div>
        {/* traigo los datos del json */}
        <PokeList pokemons={pokemons} />;
      </div>
    );
  }
}

export default App;
