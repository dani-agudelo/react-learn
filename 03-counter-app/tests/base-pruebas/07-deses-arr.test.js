import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba en 07-arreglo', () => {
    test('Debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    })
})