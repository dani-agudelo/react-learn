import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done()

            })
    })

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el heroe');
                done();

            })
    })
})


// El parámetro done en Jest se utiliza para indicar que una prueba asíncrona ha terminado. Esto es necesario cuando 
// se prueba código que involucra promesas, callbacks o cualquier operación asíncrona, ya que Jest necesita saber cuándo 
// puede finalizar la ejecución de la prueba.