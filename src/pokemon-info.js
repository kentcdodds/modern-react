import React from 'react'
import {unstable_createResource as createResource} from 'react-cache'
import fetchPokemon from './fetch-pokemon'

const myPokemon = createResource(fetchPokemon)

function FetchPokemon({pokemonName}) {
  const pokemon = myPokemon.read(pokemonName)
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function PokemonInfo({pokemonName}) {
  return (
    <React.Suspense fallback="loading...">
      <FetchPokemon pokemonName={pokemonName} />
    </React.Suspense>
  )
}

export default PokemonInfo
