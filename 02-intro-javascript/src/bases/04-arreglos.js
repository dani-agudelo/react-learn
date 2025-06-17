const arreglo = [1, 2, 3, 4];

const arreglo2 = [...arreglo, 5, 6, 7, 8];

const arreglo3 = arreglo2.map((elemento) => {
  return elemento * 2;
});
console.log(arreglo2);
console.log(arreglo3);
