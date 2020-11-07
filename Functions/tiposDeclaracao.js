//function declaration
function soma(x,y){
    return x + y
}

//function expression
const sub = function (x,y){
    return x - y
}

sub2 = function (x,y){
    return x-y
}
console.log(`${sub(5,4)} | ${sub2(5,4)}`)

//named function expression
const mult = function mult(x,y){
    return x * y
}