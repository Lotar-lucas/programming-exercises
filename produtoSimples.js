// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação 
// à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.



function calculatesProduct(value1, value2) {
  if (value1 === 0) {
    return `PROD = ${value1}` 
  } 
  if (value2 === 0) {
    return `PROD = ${value2}` 
  }
  return `PROD = ${value1 * value2}` 
}

console.log(calculatesProduct(-30, 10))

// NÃO FINALIZADO
