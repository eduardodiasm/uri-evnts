
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = lines.map(line => parseInt(line))
  .sort((a, b) => a - b)

lines.sort((a, b) => a - b)
let sum = 0

for (let i = lines[0]+1; i < lines[1]; i++) {
  if (i % 2 !== 0) {
    sum = sum + i
  }
}

console.log(sum)