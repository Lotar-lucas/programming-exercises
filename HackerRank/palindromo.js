//Dado um inteiro x, retorne verdadeiro se x for um inteiro palíndromo.
//Um inteiro é um palíndromo quando a sequência de números é a mesma da esquerda para direita e da direita para esquerda.
//Por exemplo, 121 é um palíndromo enquanto 123 não é.


const palindromo = (value) => {

    if (!value || value.length === 0 || typeof value !== `string`) {
        return false;
    }

    const convertInArray = value.split('');
    const arraiReverse = convertInArray.reverse();

    for (let index = 0; index < convertInArray.length; index++) {
        const element1 = convertInArray[index];
        
        for (let index = 0; index < arraiReverse.length; index++) {
            const element2 = arraiReverse[index];
                if (element1 !== element2) {
                    return false;
                }
                index++
        }
        index++
    }

    return true;
}
console.log('Ana é um palindromo? - ', palindromo("ana"));
console.log('Lucas é um palindromo? - ', palindromo("ana"));
