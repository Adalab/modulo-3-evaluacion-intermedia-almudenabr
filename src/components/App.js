import React from "react";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return <PokeList />;
  }
}

export default App;
