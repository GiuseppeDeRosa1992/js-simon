//Creo funzione per generare numeri random in pagina e la chiamo randomNumber
function randomNumber() {
    //uso un ciclo while per generare 5 numeri random
    while (arrayRandom.length <= 4) {
        random = Math.floor(Math.random() * 100) + 1;
        //se il numero random generato è già incluso in lista allora lo scarta
        if (arrayRandom.includes(random)) {
        }
        //se invece non c'è nella lista allora glielo pusha
        else {
            arrayRandom.push(random)
        }
        //concolelog dei numeri random generati
        console.log("I numeri random sono:", random)
        h2.innerText = `I numeri generati sono:${arrayRandom} `
    }
}
//Creo funzione per chiedre all'utente tramite prompt i numeri che vuole scegliere
function userNumber() {
    //uso un ciclo while per generare 5 numeri random
    while (arrayUser.length <= 4) {
        number = prompt("Inserisci numero")
        //se il numero random generato è già incluso in lista allora lo scarta
        if (arrayUser.includes(number)) {
        }
        //se invece non c'è nella lista allora glielo pusha
        else {
            arrayUser.push(number)
        }
        //consolelog dei numeri random generati
        console.log("Il Numero dell'utente è", number)
        h3.innerText = `I numeri dell'utente sono:${arrayUser} `
    }
}

//PER M-4 HO CERCATO SU INTERNET MA QUESTO CHE HO TROVATO NON SODDISFA IL RISULTATO CHE DOVEVO OTTENERE
// function arrayDifference() {
// 	const difference = [];

// 	for (let i = 0; i < arrayRandom.length; i++) {
// 		if (arrayUser.indexOf(arrayRandom[i]) === -1) {
// 			difference.push(arrayRandom[i]);
// 		}
// 	}
//     console.log(difference)
// }


//Funzione per timer intervallo con dentro un timeotu per chiedere all'utente i numeri tramite prompt
function interval() {
    let timer = 5
    let interval = setInterval(function () {
        if (timer != 0) {
            console.log(timer)
            h1.innerText = `Hai:${timer}s`
            timer--
        } else {
            h1.innerText = "Timer scaduto indovina i numeri appena visti"
            h2.innerText = ""
            console.log("Il timer è scaduto i numeri sono scomparsi")
            setTimeout(function () {
                userNumber()
                let result = random == number
                if (result) {
                    console.log("Complimenti hai indovinato tutti i numeri", result)
                    h4.innerHTML = "Complimenti hai indovinato tutti i numeri"
                }
                else if (!result) {
                    console.log("Non hai indovinato tutti i numeri", result)
                    h4.innerHTML = "Peccato...Non hai indovinato tutti i numeri"
                }
                //richiamo la funzione che ho trovato su internet
                // arrayDifference()
            }, 1000)
            h2.innerText = `I numeri generati sono:${arrayRandom}`
            clearInterval(interval)
        }
    }, 1000);
}

