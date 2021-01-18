var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
const area = pi * lines[0];

console.log(`A=${area.toFixed(4)}`);
