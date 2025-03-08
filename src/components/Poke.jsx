import { useState } from "react";
import TypeList from "./TypeList";

function Poke() {
    const [PokeName, SetPokeName] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [erro, setErro] = useState('');

    async function fetchpoke() {
        if (PokeName.trim().length < 3) {
            setErro('O nome do Pokémon deve ter pelo menos 3 caracteres.');
            return; 
        }
        setErro('');

        try {
            var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName.toLocaleLowerCase()}`);
            var data = await response.json();
            setPokemon(data); 
        } catch (error) {
            setErro('Pokémon não encontrado. Tente novamente!');
            setPokemon('');
        }
    }
    return (
        <div className="font-poppins">
            <h1 className="text-center mt-5 mb-5 text-2xl">Busca Pokemon!</h1>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-12 mb-2">
                    <input 
                        type="text" 
                        id="first_name" 
                        className="w-full data-twe-validation-ruleset bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" 
                        placeholder="Pokemon" 
                        required
                        value={PokeName} 
                        onChange={e => SetPokeName(e.target.value)}
                    />
                    <button 
                        className="w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 hover:bg-gray-800" 
                        onClick={fetchpoke}
                    >
                        Buscar Pokemon
                    </button>

                    {erro && <p className="text-red-500 text-center mt-5">{erro}</p>}
                </div>
            </div>

            {pokemon && (
                <div className="flex justify-center items-center">
                    <div className="dark:text-white w-60 rounded mt-5">
                        <h2 className="text-center text-4xl capitalize mt-5 mb-5">{pokemon.name}</h2>
                        <div className="flex justify-center items-center">
                            <img className="w-40 h-40 text-center" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        <TypeList types={pokemon.types} />
                    </div>
                </div>
            )}

            <footer className="bg-gray-800 text-white text-center py-8">
                Feito por João Pedro Dias Pedroso
            </footer>
        </div>
    );
}

export default Poke;
