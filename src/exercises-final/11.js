// Suspense with react-cache
import React, {Suspense, useState} from 'react'
import {unstable_createResource as createResource} from 'react-cache'
import fetchPokemon from '../fetch-pokemon'

const myPokemon = createResource(fetchPokemon)

function FetchPokemon({pokemonName}) {
  const pokemon = myPokemon.read(pokemonName)
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function PokemonInfo({pokemonName}) {
  return (
    <Suspense fallback="loading...">
      <FetchPokemon pokemonName={pokemonName} />
    </Suspense>
  )
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
function Usage() {
  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
        <input id="pokemonName-input" name="pokemonName" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? <PokemonInfo pokemonName={pokemonName} /> : null}
      </div>
    </div>
  )
}
Usage.title = 'Suspense with react-cache'

export default Usage
