const { divisores } = require("../utils/divisores")

test('resultado de null', () => {
    let resposta = divisores(null)
    expect(resposta.length).toBe(0)
})

test('resultado de ""', () => {
    let resposta = divisores('')
    expect(resposta.length).toBe(0)
})

test('resultado de "A"', () => {
    let resposta = divisores('A')
    expect(resposta.length).toBe(0)
})

test('resultado de 0', () => {
    let resposta = divisores(0)
    expect(resposta.length).toBe(0)
})

test('resultado de 10', () => {
    let resposta = divisores(10)
    expect(resposta.length).toBe(4)
})

test('resultado de 45', async () => {
    const resposta = divisores(45)
    expect(resposta.length).toBe(6)
})