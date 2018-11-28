// Fundamental Suspense
import React, {Suspense, useState} from 'react'
import ErrorBoundary from 'react-error-boundary'
import fetchPokemon from '../fetch-pokemon'

const cache = {}

function FetchPokemon({pokemonName}) {
  const pokemon = cache[pokemonName]
  if (!pokemon) {
    const promise = fetchPokemon(pokemonName).then(
      pokemon => (cache[pokemonName] = pokemon),
    )
    throw promise
  }
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function PokemonInfo({pokemonName}) {
  return (
    <ErrorBoundary FallbackComponent={() => 'There was an error...'}>
      <Suspense fallback="loading...">
        <FetchPokemon pokemonName={pokemonName} />
      </Suspense>
    </ErrorBoundary>
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
Usage.title = 'Fundamental Suspense'

export default Usage
