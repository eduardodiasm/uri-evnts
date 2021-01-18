var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = parseFloat(lines[1])
const sold = parseFloat(lines[2])

const compensation = sold * 0.15
const salaryWithBonus = salary + compensation

console.log(`TOTAL = R$ ${salaryWithBonus.toFixed(2)}`)