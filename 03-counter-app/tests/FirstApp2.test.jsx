import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en first app component', () => {

  const title = "Hola, soy Goku";
  const subtitle = "Soy un subtítulo";

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();// Muestra el DOM actual en la consola
  });

  test('Debe mostrar el título en un h1', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('Debe mostrar el subtítulo enviado por props', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeTruthy();
  });
})


/**
 * * Se añade el objeto screen de @testing-library/react para acceder a los elementos renderizados de manera más directa, en lugar de usar getByText o getByTestId.
 */