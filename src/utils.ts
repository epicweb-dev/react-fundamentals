import pokemon from 'pokemon'

function getRandomUsername() {
  return pokemon.random().toLowerCase()
}

export {getRandomUsername}
