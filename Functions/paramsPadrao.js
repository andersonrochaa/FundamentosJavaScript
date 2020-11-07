function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(`${soma1()} ; ${soma1(2,2)} ; ${soma1(0,0,0)} `)

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // O primeira 1 da linha refere-se ao indice do arguments!!!!!! 0,1,2,3...
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2())


//Valor padrao ES2015
function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}

console.log(soma3(5,2/*PARAMETO C VAZIO*/))

