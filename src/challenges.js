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
function fizzBuzz() {
}

// Desafio 9
function encode(phrase) {
}

console.log(encode('Hi there!'));

function decode(phrase) {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
