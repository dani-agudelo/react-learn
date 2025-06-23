import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en usContext', () => {
    test('usContext debe retornar un objeto con los valores correctos', () => {
        const persona = {
            clave: 'Ironman',
            nombre: 'Tony',
            edad: 45,
        };

        const expectedResult = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const result = usContext(persona);

        expect(result).toEqual(expectedResult);
    });
});