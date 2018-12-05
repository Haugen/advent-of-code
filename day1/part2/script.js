const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('../input.txt');

const unique = new Set();
const inputArray = [];

lr.on('line', line => {
  inputArray.push(line);
});

lr.on('end', () => {
  const occuredTwice = loopThroughFile(inputArray, 0);
  console.log(occuredTwice);
});

function loopThroughFile(inputArray, result) {
  for (let line of inputArray) {
    const operator = line.charAt(0);
    const value = Number(line.substring(1));

    if (operator === '+') {
      result += value;
    } else {
      result -= value;
    }

    if (unique.has(result)) {
      return result;
    }
    unique.add(result);
  }
  return loopThroughFile(inputArray, result);
}
