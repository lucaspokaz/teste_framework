exports.divisores = (numero) => {
    try {
        let resposta = []
        for (let i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                resposta.push(i)
            }
        }
        return resposta
    } catch (error) {
        return []
    }
}