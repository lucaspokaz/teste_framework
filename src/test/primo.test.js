const { numeroPrimo } = require("../utils/primo")

test('resultado de null: NÃO É PRIMO', () => {
    let resposta = numeroPrimo(null)
    expect(resposta).toBe(false)
})

test('resultado de A: NÃO É PRIMO', () => {
    let resposta = numeroPrimo('A')
    expect(resposta).toBe(false)
})

test('resultado de "": NÃO É PRIMO', () => {
    let resposta = numeroPrimo('')
    expect(resposta).toBe(false)
})

test('resultado de 31: É PRIMO', () => {
    let resposta = numeroPrimo(31)
    expect(resposta).toBe(true)
})

test('resultado de 20: NÃO É PRIMO', () => {
    let resposta = numeroPrimo(20)
    expect(resposta).toBe(false)
})