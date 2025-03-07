import { useState } from "react";


function Poke() {
    const [PokeName, SetPokeName] = useState('');
    const [pokemon, setPokemon] = useState('');

    async function fetchpoke() {
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName.toLocaleLowerCase()}`);
        var data = await response.json();
        setPokemon(data); 
    }
    return (
        <div className="">
            <h1 className="text-center text-5xl  font-poppins mt-20">PokeJP</h1>
            <div className="flex justify-center items-center ">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-30  ">
            <input 
                type="text" 
                id="first_name" 
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center  " 
                placeholder="Pokemon" 
                value={PokeName} onChange={e => SetPokeName(e.target.value)}
                required 
            />
            <button className="w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5" onClick={fetchpoke}>Buscar Pokemon</button>

            </div>
            
         </div>


            {pokemon && (
                <div className="flex justify-center items-center ">
                <div className="dark:border-white dark:border-2 dark:text-white w-60 rounded mt-15">
                    <h2 className="text-center capitalize text-2xl mt-5">{pokemon.name}</h2>
                    <div className="flex justify-center items-center ">

                    <img className="w-50 h-50 text-center" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                <p></p>
                </div>
                </div>
            )}
            
        </div>
        
    );
}

export default Poke;
