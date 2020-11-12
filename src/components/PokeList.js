import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    // console.log(this.props.pokemons[0].name);

    // lo que quiero pintar
    const cards = this.props.pokemons.map((pokemon) => {
      // console.log(pokemon);

      return (
        <li key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });
    console.log(cards);
    return (
      <div>
        Lista de Pokemon:
        <ul> {cards}</ul>
      </div>
    );
  }
}

export default PokeList;
