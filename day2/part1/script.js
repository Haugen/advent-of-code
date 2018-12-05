const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('../input.txt');

const inputArray = [];
let two = 0;
let three = 0;

lr.on('line', line => {
  inputArray.push(line);
});

lr.on('end', () => {
  for (let line of inputArray) {
    scanLine(line);
  }

  // Final result!
  console.log(two * three);
});

function scanLine(line) {
  let map = {};
  let twoDone = false;
  let threeDone = false;

  for (let char of line) {
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let value of Object.values(map)) {
    if (value === 2 && !twoDone) {
      two++;
      twoDone = true;
    }
    if (value === 3 && !threeDone) {
      three++;
      threeDone = true;
    }
  }
}
