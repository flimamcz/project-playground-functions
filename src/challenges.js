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
function highestCount(array) {
  const maxNumber = Math.max(...array);
  let sumNumberMax = 0
  for(let index = 0; index < array.length; index += 1){
    if(array[index] === maxNumber){
      sumNumberMax += 1
    }
  }
  return sumNumberMax;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCatOne = Math.abs(mouse - cat1)
  let positionCatTwo = Math.abs(mouse - cat2)
  let nextToTheCat = ''

  if (positionCatOne < positionCatTwo){
    nextToTheCat = 'cat1'
  } else if (positionCatTwo < positionCatOne){
    nextToTheCat = 'cat2'
  } else {
    nextToTheCat = 'os gatos trombam e o rato foge'
  }

  return nextToTheCat
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
  if (phrase.length) {
    let phraseEncode = phrase.replace(/a/g, '1');
    phraseEncode = phraseEncode.replace(/e/g, 2);
    phraseEncode = phraseEncode.replace(/i/g, 3);
    phraseEncode = phraseEncode.replace(/o/g, 4);
    phraseEncode = phraseEncode.replace(/u/g, 5);
    return phraseEncode;
  } else {
    return 'Informe uma frase!';
  }
}

function decode(phrase) {
  if (phrase.length) {
    let phraseDecode = phrase.replace(/1/g, 'a');
    phraseDecode = phraseDecode.replace(/2/g, 'e');
    phraseDecode = phraseDecode.replace(/3/g, 'i');
    phraseDecode = phraseDecode.replace(/4/g, 'o');
    phraseDecode = phraseDecode.replace(/5/g, 'u');
    return phraseDecode;
  } else {
    return 'Informe uma frase!';
  }
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
