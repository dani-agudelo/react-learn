import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

    // useState es un Hook que permite añadir el estado de React a un componente funcional.
    // useState devuelve un array con dos elementos: el estado actual y una función para actualizar

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);

    const handleSubtract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);


    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubtract}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};