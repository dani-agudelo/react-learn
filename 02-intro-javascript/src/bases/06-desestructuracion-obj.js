// Desestructuración de objetos
const persona = {
  nombre: "Dani",
  edad: 25,
  email: "dani@example.com",
};

// Desestructuración de objetos
const { nombre, edad, email } = persona;
console.log(nombre); // "Dani"
console.log(edad); // 25
console.log(email); // "dani@example.com"

// Desestructuración de objetos en una funciónm, en el argumento
const obj = ({ nombre, edad, email, rango = "invitado" }) => {
  // console.log(`Nombre: ${nombre}, Edad: ${edad}, Email: ${email}, Rango: ${rango}`);
  return {
    claveEmail: email,
    anios: edad,
    nombreCompleto: `${nombre} (${rango})`,
    latlng: {
      lat: 14.1232,
      lng: -12.1232,
    },
  };
};

// Si es un objeto dentro de un objeto, se puede desestructurar con clave: {clave1, clave2}
const {
  nombreCompleto,
  claveEmail,
  anios,
  latlng: { lat, lng },
} = obj(persona);
console.log(
  `Nombre Completo: ${nombreCompleto}, Email: ${claveEmail}, Años: ${anios}, Latitud: ${lat}, Longitud: ${lng}`
);
