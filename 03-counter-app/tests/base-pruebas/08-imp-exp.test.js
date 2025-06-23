import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Prueba en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        console.log('miremos');

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined si el héroe no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    }
    );
});