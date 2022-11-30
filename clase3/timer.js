let time = 10

function timer(){
    while (time >= 0) {
        setTimeout(function(){
            console.log("cuenta atrás ", time);
            time--
            timer()
        }, 1000);
    }
}

let setTimer = timer()