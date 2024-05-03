console.log("ciao giuseppe")
//variabile per lista random
let arrayRandom = []
//variabile per numero random che richiamo nella funzione
let random = "";
//variabile che mi richiama h2 di html
let h2 = document.querySelector("h2")
//creo variabile per lista dei numeri che chiedo all'utente
let arrayUser = []
//creo variabile di appoggio per richiamare h3 da html
let h3 = document.querySelector("h3")

randomNumber()

let timer = 3
setInterval(function () {
    if(timer != 0){
        console.log(timer)
        timer--
    } else{
        h2.innerText = ""
        console.log("Il timer è scaduto i numeri sono scomparsi")
        setTimeout(function(){
            userNumber()
        },1000)
    }
}, 1000);

