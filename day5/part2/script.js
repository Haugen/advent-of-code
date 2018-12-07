const fs = require('fs');
const path = require('path');

const eachLetterPairs = require('./letter-pairs');

const dataString = fs.readFileSync(path.join('../', 'input.txt'), 'utf-8');

eachLetterPairs.forEach(letterPair => {
  const dataStringWithoutOneChar = removePairs(dataString, letterPair);
  letterPair.result = comparePair(dataStringWithoutOneChar);
});

// Final result!
console.log(eachLetterPairs);

function removePairs(dataString, letterPair) {
  let dataStringWithoutOneChar = '';
  for (let i = 0; i < dataString.length; i++) {
    const found = letterPair.chars.find(char => {
      return char === dataString[i];
    });

    if (!found) {
      dataStringWithoutOneChar += dataString[i];
    }
  }

  return dataStringWithoutOneChar;
}

function comparePair(data) {
  let newDataString = '';
  let runAgain = false;

  for (let i = 0; i < data.length; i += 1) {
    let left = data[i];
    let right = data[i + 1];

    if (shouldDestroy(left, right)) {
      runAgain = true;
      i++;
    } else {
      newDataString += left;
    }
  }

  if (runAgain) {
    return comparePair(newDataString);
  } else {
    return newDataString.length;
  }
}

function shouldDestroy(a, b) {
  if (a && b) {
    if (isSameLetter(a, b)) {
      return !isSameCapitalization(a, b);
    }
  }
  return false;
}

function isSameLetter(a, b) {
  return b.toUpperCase() === a.toUpperCase();
}

function isSameCapitalization(a, b) {
  return a === b;
}
