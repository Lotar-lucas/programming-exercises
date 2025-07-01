// Descrição da função
//Exercício realizado em hacker rank.

// Faça a função aVeryBigSum. Deve retornar a soma de todos os elementos do array.
// aVeryBigSum tem os seguintes parâmetros:
// int ar[n] : uma matriz de inteiros.


const aVeryBigSum = ( arrayOfInt ) => {
    let acumulator = 0;

    if (typeof arrayOfInt === 'number') {
        acumulator += arrayOfInt;
        
    }

    if (typeof arrayOfInt === 'object' && arrayOfInt.length && (arrayOfInt.length >= 0 || arrayOfInt.length <= 11 )) {
        arrayOfInt.forEach(element => {
            acumulator += element;
        });
    }

    return acumulator;
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));
console.log(aVeryBigSum(5));
