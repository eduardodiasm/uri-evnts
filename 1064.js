const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const lines = input.split('\n')

const positives = []

for (let i = 0; i < lines.length; i++) {
  const value = parseFloat(lines[i])
  if (value > 0) positives.push(value)
}

const sum = positives.reduce((a, b) => a + b, 0)
const avg = sum / positives.length

console.log(`${positives.length} valores positivos`)
console.log(avg.toFixed(1))
