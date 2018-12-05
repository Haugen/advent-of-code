const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('../input.txt');

const inputArray = [];
let finished = false;

lr.on('line', line => {
  inputArray.push(line);
});

lr.on('end', () => {
  let index = 0;
  do {
    compareLine(inputArray[index]);
    index++;
  } while (!finished);
});

function compareLine(lineToCompare) {
  for (let currentLine of inputArray) {
    let diff = 0;
    for (let i = 0; i < lineToCompare.length; i++) {
      if (lineToCompare[i] !== currentLine[i]) diff++;
    }
    if (diff === 1) {
      finished = true;
      let index = 0;
      let result = '';

      for (let i = 0; i < lineToCompare.length; i++) {
        if (lineToCompare[i] === currentLine[i]) {
          result += lineToCompare[i];
        }
      }

      // Final result!
      console.log(result);
    }
  }
}
