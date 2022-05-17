import { PokemonItem } from "../../types"

import "./pokemon-list.css"

interface Props {
  pokemon: Array<PokemonItem>
}

const PokemonList = ({ pokemon }: Props) => {
  return (
    <>
      <h2>Lista de pokemon</h2>
      <div className="users-wrapper">
        <ul className="users-list">
          {pokemon.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PokemonList
