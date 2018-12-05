const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('../input.txt');

const inputArray = [];
let result = 0;

lr.on('line', line => {
  inputArray.push(line);
});

lr.on('end', () => {
  for (let line of inputArray) {
    const operator = line.charAt(0);
    const value = Number(line.substring(1));
    if (operator === '+') {
      result += value;
    } else {
      result -= value;
    }
  }

  // Final result!
  console.log(result);
});
