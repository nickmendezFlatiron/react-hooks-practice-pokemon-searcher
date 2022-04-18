import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeDex , search}) {

  const filteredPokemon = pokeDex.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  const renderPokemon = filteredPokemon.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
