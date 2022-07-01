// Desafio 11
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(array) {
  const message = 'não é possível gerar um número de telefone com esses valores';
  if (array.length !== 11) return 'Array com tamanho incorreto.';

  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    if (array[index] < 0 || array[index] > 9) return message;

    for (let count = 0; count < array.length; count += 1) {
      if (array[index] === array[count]) contador += 1;
      if (contador >= 3) return message;
    }
  }
  return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
}

console.log(generatePhoneNumber(numbers));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
