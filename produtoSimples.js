// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação 
// à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

// Entrada
// O arquivo de entrada contém 2 valores inteiros.


// Saída
// Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.


const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculatesProduct(value1, value2) {
  if ((Number(value1) && Number(value2)) && (value1 > 0 && value2 > 0)) {
    return `PROD = ${value1 * value2}`
  }
}

calculatesProduct(input)
// NÃO FINALIZADO