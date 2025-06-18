// Desestructuración de arreglos
const personajes = ["Goku", "Vegeta", "Trunks"];

// Se toma según el índice y el orden de los elementos
const [p1] = personajes;
console.log(p1); // "Goku"
const [,, p3] = personajes;
console.log(p3); // "Trunks"

const retornarArreglo = () => {
  return ["ABC", 123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras); // "ABC" 
console.log(numeros); // 123

// Tarea 
// 1. El primer parametro del arreglo es valor, el segundo es una función que no hace nada
const ejemploHook= (valor) => {
  return [valor, () => { console.log("Hola Mundo") }];
}

const [nombre, setNombre] = ejemploHook("Goku");
console.log(nombre); // "Goku"
setNombre(); // "Hola Mundo"