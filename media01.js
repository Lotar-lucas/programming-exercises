// Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
// A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11).
// Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// Entrada:
  // O arquivo de entrada  contém 2 valores com uma casa decimal cada.

// Saída:
  // Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. 
  // Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

// Ecxemplo de entrada:
// 5.0 / 7.1 -> MEDIA = 6.43182

// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// const lines = input.split('\n');

const averageScores = (grade1, grade2) => {
  const weightNote1 = 3.5
  const weightNote2 = 7.5

  const equivalentNote1 = (weightNote1 * grade1) /  100
  const equivalentNote2 = (weightNote2 * grade2) /  100

  console.log('M' , equivalentNote1 , equivalentNote2,  equivalentNote1 + equivalentNote2 )

  const result = (equivalentNote1 + equivalentNote2) / 2

  

  return `MEDIA = ${result}`
}

console.log(averageScores(5.0, 7.1))
// regra de 3