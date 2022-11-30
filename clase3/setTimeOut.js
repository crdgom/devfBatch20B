function hello() {
    setTimeout(function(){
        console.log('Hello world');
    }, 3000);
}

function adios(callback){
    setTimeout(function(){
        console.log('Adios mundo');
        callback()
    }, 2000);
}

function welcome(){
    setTimeout(function(){
        console.log('Bienvenido mundo');
    }, 3000);
}


adios(hello);