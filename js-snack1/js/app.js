//L’utente inserisce due numeri in successione, con due prompt.
let numeroA = parseFloat(prompt ("scegli un numero:")); //number

let numeroB = parseFloat(prompt("Scegli un altro numero:")); //number

//Il software stampa il maggiore.

let maggiore, minore; //string

//Stampare numeroA se è maggiore di numeroB
if (numeroA > numeroB) {
    maggiore = numeroA;
    minore = numeroB;
}   

//stampare numeroB se è maggiore di numeroA
else if (numeroB > numeroA) {
    maggiore = numeroB;
    minore = numeroA;
}

//in caso l'utente inserisca lo stesso numero due volte
else {
    console.log('I numeri corrispondono') //string
}

//stampare il numero maggiore per primo
console.log('Numero maggiore:' + maggiore); //number
console.log('Numero minore:' + minore); //number

 
