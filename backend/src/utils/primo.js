exports.numeroPrimo = (numero) => {
    try {
        if (!Number(numero)) {
            throw new Error('Não é numero')
        }
        for (let i = 2; i < numero; i++)
            if (numero % i === 0) {
                return false
            }
        return true
    } catch (error) {
        return false
    }

}