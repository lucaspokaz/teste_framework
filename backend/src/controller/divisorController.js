const { divisores } = require('../utils/divisores')
const { numeroPrimo } = require('../utils/primo')

exports.get_divisores = (req, res) => {
    try {
        const { numero } = req.params

        let arrayDivisores = []
        let arrayPrimos = []

        arrayDivisores = divisores(numero)

        for (const item of arrayDivisores) {
            if (numeroPrimo(item)) {
                arrayPrimos.push(item)
            }
        }

        let json = {}
        json.divisores = arrayDivisores
        json.primos = arrayPrimos

        res.status(200).send(json)

    } catch (error) {
        res.status(500).send(error.message)
    }
}