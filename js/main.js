console.log("ciao giuseppe")
//variabile per lista random
let arrayRandom = []
//variabile per numero random che richiamo nella funzione
let random = "";
//variabile che mi richiama h2 di html
let h2 = document.querySelector("h2")
randomNumber()

let timer = 3
setInterval(function () {
    if(timer == 0){
        h2.innerText = ""
        console.log("Il timer è scaduto i numeri sono scomparsi")
    } else{
        console.log(timer)
        timer--
    }
}, 1000);
