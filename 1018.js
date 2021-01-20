const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const lines = input.split('\n')

let value = lines.shift()
const notes = [100, 50, 20, 10, 5, 2, 1]

console.log(value)

for (let i = 0; i < notes.length; i++) {

  const notesToGive = parseInt(value / notes[i])
  console.log(`${notesToGive} nota(s) de R$ ${notes[i]},00`)
  value = value % notes[i]
  
}