// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  return `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount() {
}

// Desafio 7
function catAndMouse() {
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      newArray.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
}

function decode(phrase) {
  // seu código aqui
}

// Desafio 10
function techList(array, string) {
  let newArrayObj = [];

  if (!array.length || !string) {
    return 'Vazio!';
  }

  for (let index = 0; index < array.length; index += 1) {
    newArrayObj.push({
      tech: array[index],
      name: string,
    });
  }

  return newArrayObj.sort((a, b) => {
    if (a.tech < b.tech) {
      return -1;
    }
  });
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
