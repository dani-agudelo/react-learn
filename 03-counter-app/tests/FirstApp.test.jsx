import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en first app component', () => {

  // test('Debe hacer match con el snapshot', () => {

  //   const {container}= render(<FirstApp title="Hola, soy Vegeta" />);
  //   expect(container).toMatchSnapshot(); 
  // });

  test('Debe mostrar el título en un h1', () => {
    const title = "Hola, soy Dani";
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    // expect(container.querySelector('h1').innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe mostrar el subtítulo enviado por props', () => {
    const title = "Hola, soy Goku";
    const subtitle = "Soy un subtítulo";
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subtitle={subtitle}
      />
    );

    expect(getAllByText(subtitle)).toBeTruthy();
  });


})


/**
 * * En este código, se está utilizando la librería @testing-library/react para renderizar el componente FirstApp y realizar pruebas sobre él.
 * * Se define un bloque describe que agrupa las pruebas relacionadas con el componente FirstApp.
 * * Se usa render para montar el componente en un entorno de prueba.
 * * Se realizan dos pruebas:
 * * 1. Verificar que el componente coincida con un snapshot, lo que significa que la salida del componente no ha cambiado inesperadamente.
 * * 2. Verificar que el título se muestre correctamente en un elemento h1 y que contenga el texto esperado.
 * * Las pruebas utilizan métodos como getByText que permiten seleccionar elementos del DOM renderizado y realizar aserciones sobre ellos,
 * * como toBeTruthy para verificar que un elemento existe y toContain para verificar que un texto específico está presente en el contenido de un elemento.
 * * Y se usa getByTestId para seleccionar un elemento por su atributo data-testid, lo que es útil para pruebas más específicas y evitar dependencias de estilos o estructura del DOM.
 */