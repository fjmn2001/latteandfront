import "./App.css"
import { useEffect, useState } from "react"
import { PokemonItem } from "./types"
import PokemonList from "./components/list/PokemonList"
import { getAllPokemon } from "./repositories/pokemonRepository"

function App() {
  const [pokemon, setPokemon] = useState<Array<PokemonItem>>([])

  useEffect(() => {
    ;(async () => {
      const { results } = await getAllPokemon()
      setPokemon(results)
    })()
  }, [])

  return (
    <main>
      <h1>Panel de pokemon</h1>
      <div className="row">
        <div className="col">
          <PokemonList pokemon={pokemon} />
        </div>
      </div>
    </main>
  )
}

export default App
