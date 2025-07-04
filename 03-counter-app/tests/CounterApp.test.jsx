import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('CounterApp Component Tests', () => {

    const initialValue = 100;

    test('debería hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('debería mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByText('100')).toBeTruthy();
    });
});