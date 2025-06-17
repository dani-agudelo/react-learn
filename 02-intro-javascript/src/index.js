const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};
console.log(saludar("Dani")); // Hola, Dani

// Función flecha con retorno explícito
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
console.log(saludar2("Juan")); // Hola, Juan

// Función flecha con retorno implícito
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3("Pedro")); // Hola, Pedro

// Función flecha sin parámetros
const saludar4 = () => `Hola, Mundo`;
console.log(saludar4()); // Hola, Mundo

// Función flecha sin parámetros
const getUser = () => ({
  id: "123",
  username: "Dani",
  email: "dani@example.com",
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Dani");
console.log(usuarioActivo);

3;
