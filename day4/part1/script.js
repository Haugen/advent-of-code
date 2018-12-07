const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('../input.txt');

let data = [];

lr.on('line', line => {
  const date = line.substring(1, 17);
  const minute = line.substring(15, 17);
  const text = line.substring(19);
  data.push({
    date,
    minute,
    text
  });
});

lr.on('end', () => {
  data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  console.log(data);
});
