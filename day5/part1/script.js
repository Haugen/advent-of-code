const fs = require('fs');
const path = require('path');

const dataString = fs.readFileSync(path.join('../', 'input.txt'), 'utf-8');

const finalResult = comparePair(dataString);

// Final result!
console.log(finalResult.length);

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
    return newDataString;
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
