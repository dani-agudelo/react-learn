import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CounterApp } from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= {0   } />
    </React.StrictMode>,
)


// Para tener una app de React, básicamente necesitas:
// 1. Un elemento HTML con un id específico (en este caso, 'root') en tu archivo HTML.
// 2. Importar React y ReactDOM en tu archivo JavaScript.
// 3. Crear un componente React (en este caso, App) que renderice algo.
// 4. Usar ReactDOM para renderizar ese componente dentro del elemento HTML especificado