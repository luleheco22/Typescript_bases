import { Pokemon } from "./decorators/pokemon-class";

// import { getPokemon } from './generics/get-pokemon';

// getPokemon(1)
//         .then(pokemon=>console.log(pokemon.sprites.front_default))
//         .catch(error=> console.log(error))
//         .finally(()=>console.log('Fin de get Pokemon'))


const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName='Picachu'

console.log(charmander.savePokemonToDB(50))