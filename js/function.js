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
        console.log(random)
        h2.innerText = `I numeri generati sono:${arrayRandom}`
    }    
}