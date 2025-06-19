// Si se exporta por defecto, se puede importar con cualquier nombre y sin llaves
// Si se exporta con nombre, se debe importar con el mismo nombre y entre llaves

import heroes, { owners } from "./../data/heroes";
// console.log("Owners:", owners);

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

const heroe = getHeroById(2);
// console.log(heroe); // { id: 2, name: 'Spiderman', owner: 'Marvel' }

const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};
const heroesByDC = getHeroesByOwner("DC");
// console.log(heroesByDC); 
