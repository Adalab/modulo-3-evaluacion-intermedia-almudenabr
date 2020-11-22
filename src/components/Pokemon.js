import React from "react";
import PropTypes from "prop-types";
import "./Pokemon.scss";

const Pokemon = (props) => {
  const pokemonItem = props.types.map((type) => {
    return <li key={props.key}>{type}</li>;
  });

  return (
    <ul className="cards">
      <li key={props.key} className="card">
        <h2 className="cardName">{props.name} </h2>
        <img src={props.img} alt={props.name} className="img" />
        <h3 className="cardType">{pokemonItem}</h3>
      </li>
    </ul>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Pokemon;
