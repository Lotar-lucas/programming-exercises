//função que recebe um numero inteiro e entrega o fatorial deste numero

//solução usando recursividade

const factorialRecursion = (number) => {
    if (number === 1) {
        return 1
    }

    return number * factorial(number - 1)
}

//solução sem recursividade


