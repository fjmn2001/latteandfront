import { PokemonItem } from "../types"

export const getAllPokemon = (): Promise<{ results: Array<PokemonItem> }> => {
  return fetch("https://pokeapi.co/api/v2/pokemon", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("not ok")
    }

    return response.json()
  })
}
