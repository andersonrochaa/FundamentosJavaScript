// Closure é o escopo criado quado uma funcao é declarada
// Esse escopo permite a funcao acessar e manipular variáveis externas a funcao.

// Contexto léxico em açao!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return  dentro
}

const minhafuncao = fora()
console.log(minhafuncao())