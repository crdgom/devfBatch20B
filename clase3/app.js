
/* 
    un callback es una función que se pasa como parámetro a otra función
    y se ejecuta dentro de la función que la recibe

*/

function hello(message, callback){
    return callback(message)
}

function seeYou(message){
    return `Goodby ${message}`
}

console.log(hello('Hola mundo', seeYou));