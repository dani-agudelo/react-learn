import {heroes} from './data/heroes';


const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

const heroe= getHeroById(2);
console.log(heroe); // { id: 2, name: 'Spiderman', owner: 'Marvel' }

const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}
const heroesByDC = getHeroesByOwner('DC');
console.log(heroesByDC); // [{ id: 1, name: 'Batman', owner: 'DC' }, { id: 3, name: 'Superman', owner: 'DC' }, { id: 4, name: 'Flash', owner: 'DC' }]