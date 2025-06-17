const persona= {
    nombre: 'Dani',
    apellido: 'Agudelo',
    edad: 30,
    direccion: {
        ciudad: 'Medellín',
        pais: 'Colombia'
    },
}

// Making a copy of the persona object
const personaCopy = { ...persona };
personaCopy.nombre = 'Juan';
console.log({persona});
console.log({personaCopy});