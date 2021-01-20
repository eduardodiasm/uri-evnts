const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const lines = input.split('\n')

let value = lines.shift()
const notes = [100, 50, 20, 10, 5, 2, 1]

console.log(value)

for (const note of notes) {

  const notesToGive = parseInt(value / note)
  console.log(`${notesToGive} nota(s) de R$ ${note},00`)
  value = value % note
  
}