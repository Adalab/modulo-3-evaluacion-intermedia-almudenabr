import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    // lo que quiero pintar
    const pokemonCard = this.props.pokemons.map((pokemon) => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          img={pokemon.url}
          types={pokemon.types}
        />
      );
    });
    return (
      <div>
        Lista de Pokemon:
        <ul> {pokemonCard}</ul>
      </div>
    );
  }
}

PokeList.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  types: PropTypes.string,
};

export default PokeList;
