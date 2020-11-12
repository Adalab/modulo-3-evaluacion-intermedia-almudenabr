import React from "react";

const Pokemon = (props) => {
  console.log(props.pokemon.url);

  const cards = props.pokemon.types.map((type) => {
    return <li key={props.pokemon.id}>{type}</li>;
  });
  return (
    <article>
      <h2>{props.pokemon.name}</h2>

      <h3>{cards}</h3>
    </article>
  );
};

export default Pokemon;
