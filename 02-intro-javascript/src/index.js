import { getHeroById } from "./bases/08-funciones-arr";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(2);
//     console.log("2 segundos después");
//     // resolve(heroe);
//     reject("No se pudo encontrar el héroe con el ID 2");
//   }, 2000);
// });

// // el then se ejecuta cuando la promesa se resuelve
// promesa
//   .then((heroe) => {
//     console.log("Then de la promesa");
//     console.log(heroe);
//   })
//   .catch((error) => {
//     console.error("Error en la promesa:", error);
//   });

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);
      if (!heroe) {
        reject("No se pudo encontrar el héroe con el ID " + id);
        return;
      }
      resolve(heroe);
    }, 2000);
  });
};

getHeroByIdAsync(2).then(console.log).catch(console.warn);

// El console.warn recibe el primer argumento y lo muestra como una advertencia en la consola, no hay que usar un callback
// Asimismo, el console.log recibe el primer argumento y lo muestra como un mensaje normal en la consola, no hay que usar un callback
