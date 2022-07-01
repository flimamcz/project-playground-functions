// Desafio 11
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

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // if((lineA < lineB + lineC) || (lineB < lineA + lineC) || (lineC < lineA + lineB)){
  //   return true
  // }

  const verifyLineA = lineA < lineB + lineC && (lineA > Math.abs(lineB - lineC))
  const verifyLineB = lineB < lineA + lineC && (lineB > Math.abs(lineA - lineC))
  const verifyLineC = lineC < lineA + lineB && (lineC > Math.abs(lineA - lineB))

  return verifyLineA && verifyLineB && verifyLineC
}

console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
