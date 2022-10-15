// Dados cinco inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco inteiros. Em seguida, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros longos separados por espaço.

// Exemplo
const arr = [1,3,5,7,9]

// A soma mínima é 1+3+5+7= 16 a soma máxima é 3+5+7+9=24. A função imprime
// 16 24

// Descrição da função
// Complete a função miniMaxSum no editor abaixo.

// miniMaxSum tem os seguintes parâmetros:
// arr : uma matriz deinteiros

// Imprimir
// Imprima dois inteiros separados por espaço em uma linha: a soma mínima e a soma máxima dedoelementos.

// Formato de entrada
// Uma única linha de cinco inteiros separados por espaço.

// Restrições
//  1 <= arr[i] <= 10 na nona potencia

// Formato de saída
// Imprima dois inteiros longos separados por espaços denotando os respectivos valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco inteiros. (A saída pode ser maior que um inteiro de 32 bits.)


const MinMaxInt = (arr) => {
    
    if (!arr || !arr.length || typeof arr[0] !== 'number') {
        return "erro";
    }
    const arrSort = arr.sort((a, b) => a - b);

    function sumInt (arrSort, typeOperation) {
        let sumMin = null;
        let sumMax = null;

        if (typeOperation === "max") {
            let previous = 0;
            for (let index = 1; index < arrSort.length; index++) {
                sumMax = previous + arrSort[index];
                previous = arrSort[index]
            }
            return sumMax;
        }

        if (typeOperation === "min") {
            let previous = 0;
            for (let index = 0; index < (arrSort.length - 1); index++) {
                sumMin = previous + arrSort[index];
                previous = arrSort[index]
            }
            return sumMin
        }
    }

    const min = sumInt(arrSort, "min");
    const max = sumInt(arrSort, "max");

    return min + " " + max;
};

console.log(MinMaxInt(arr));