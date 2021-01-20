// const lines = [
//   "9.0 4.0 8.5 9.0"
// ]

const grades = lines[0]
  .split(' ')
  .map(v => parseFloat(v))

const weights = [2.0, 3.0, 4.0, 1.0]

const avg = grades
  .reduce((a, b, i) => (a + (b * weights[i])), 0) / 10.0

console.log(`Media: ${avg.toFixed(1)}`)

if (avg >= 7.0) {
  console.log('Aluno aprovado.')
}

else if (avg >= 5.0) {

  const examGrade = parseFloat(lines[1])
  console.log('Aluno em exame.')
  console.log(`Nota do exame: ${examGrade.toFixed(1)}`)

  const newAvg = (avg + examGrade) / 2

  if (newAvg > 5.0) {
    console.log('Aluno aprovado.')
  } else {
    console.log('Aluno reprovado.')
  }

  console.log(`Media final: ${newAvg.toFixed(1)}`)

}

else {
  console.log('Aluno reprovado.')
}