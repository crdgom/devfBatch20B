function operaciones(x,y, callback){
    return callback(x,y)
}

function suma(x,y){
    return x + y
}

function resta(x,y){
    return x - y
}

function multiplicacion(x,y){
    return x * y
}

function division(x,y){
    return x / y
}


console.log(operaciones(2,3, suma));
console.log(operaciones(2,3, resta));
console.log(operaciones(2,3, multiplicacion));
console.log(operaciones(2,3, division));