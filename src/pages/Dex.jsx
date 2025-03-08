import { useState, useEffect } from "react"

function Dex() {
  const [Pokemons, SetPokemons] = useState([]);

  async function getAllPokemons() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251")
      const data = await response.json()
      const pokemonDetailsPromises = data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url)
        const pokemonData = await pokemonResponse.json()
        return {
          name: pokemon.name,
          sprite: pokemonData.sprites.front_default,
          types: pokemonData.types.map(typeInfo => typeInfo.type.name)  
        }
      })
      const pokemonsWithSprites = await Promise.all(pokemonDetailsPromises)
      SetPokemons(pokemonsWithSprites)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

  return (
    <div>
      <h1 className="text-center text-2xl mt-5 mb-5">Lista de Pokémons</h1>
      <div className="flex flex-wrap justify-center mt-5 gap-4">
        {Pokemons.map((pokemon, index) => (
          <div className="card w-60 h-70 p-4 border rounded-xl" data-aos="fade-up" key={index}>
            <h1 className="text-center capitalize text-xl">{pokemon.name}</h1>
            <img src={pokemon.sprite} alt={pokemon.name} className="mx-auto mt-10 mb-5" />
            <div className="text-center mt-3">
              {pokemon.types.map((type, typeIndex) => (
                <span key={typeIndex} className=" capitalize badge bg-primary mx-1">{type}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dex;
