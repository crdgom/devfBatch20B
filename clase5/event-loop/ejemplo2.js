/* ¿QUE VA PRIMERO? */

console.log('1');
setTimeout(() => console.log('2'), 3000)

console.log('FIN');

setTimeout(() => console.log('3'), 0);

let a = 0;
while (a <= 3){
    console.log(a);
}