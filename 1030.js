var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function getSurvivor (people, salt) {

  let remaining = 0

  for (let i = 2; i <= people; i++) {
    remaining = (remaining + salt) % i
  }

  return remaining

}

const values = lines
  .map(line => line.split(" ")
    .map(value => parseInt(value))
  )

var n = values[0]

for (let i = 1; i <= n; i++) {
  
  const people = values[i][0]
  const salt = values[i][1]

  const survivor = getSurvivor(people, salt)

  console.log(`Case ${i}: ${survivor + 1}`)
}