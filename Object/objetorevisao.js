const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco

console.log(produto)

const carro = {
    modelo: A4,
    valor: 89100,
    idade:56,
    endereco: {
        logradouro:'Rua c',
        n: 456
    }
}