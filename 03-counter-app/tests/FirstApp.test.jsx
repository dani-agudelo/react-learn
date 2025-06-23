import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en first app component', () => {
  test('Debe hacer match con el snapshot', () => {

    const {container}= render(<FirstApp title="Hola, soy Vegeta" />);
    console.log(container);
    expect(container).toMatchSnapshot(); 
  });


})