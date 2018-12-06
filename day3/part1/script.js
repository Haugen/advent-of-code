const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('../input.txt');

const matrix = [];
let counter = 0;
const data = [];

for (let i = 0; i < 1000; i++) {
  matrix.push([]);
  for (let j = 0; j < 1000; j++) {
    matrix[i].push(counter);
    counter++;
  }
}

lr.on('line', line => {
  const id = line.split('@')[0].trim();
  const coords = line
    .split('@')[1]
    .split(':')[0]
    .trim()
    .split(',');
  const size = line
    .split(':')[1]
    .trim()
    .split('x');

  data.push({
    id,
    coords,
    size
  });
});

lr.on('end', () => {
  coveredPositions = new Set();
  occurTwice = new Set();

  for (let current of data) {
    const top = Number(current.coords[1]);
    const left = Number(current.coords[0]);

    for (let i = 0; i < current.size[1]; i++) {
      const rowStart = matrix[top + i][left];
      for (let j = 0; j < current.size[0]; j++) {
        const currentPos = rowStart + j;

        if (coveredPositions.has(currentPos)) {
          occurTwice.add(currentPos);
        }
        coveredPositions.add(currentPos);
      }
    }
  }

  // Final result!
  console.log(occurTwice.size);
});
