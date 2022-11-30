/* let promesaDeMiEx = new Promise(function(resolve, reject ){
    let miEx = false;
    if(miEx){
        resolve("Si, todavía me ama");
    } else {
        reject("No, ya no me ama");
    }
})

promesaDeMiEx.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
}) */

//PROMISES
const aplicarDescuento = new Promise( (resolve, reject) => {

    const subtotal = 100000;

    if(subtotal > 10000) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo Aplicar');
    }

} );

aplicarDescuento
    .then( resultado => {
        subtotal(resultado);
    })
    .catch( error => {
        subtotal(error);
    });

    // Hay 3 valores posibles...
    // Fulfilled - El promise se cumplió
    // Rejected - El promise no se cumplió
    // Pending - No se ha cumpludo y tampoco fue rechazado

    function subtotal(mensaje){
        console.log(mensaje);
    }
