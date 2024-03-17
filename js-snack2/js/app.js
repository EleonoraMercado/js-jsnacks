//L’utente inserisce due parole in successione, con due prompt.

let parola1 = prompt('Inserisci una parola che ti piace:'); //string 
let parola2 = prompt('Inserisci un altra parola'); //string

//Il software stampa prima la parola più corta, poi la parola più lunga.

let corta, lunga; //string

//stampare parola1 se piu corta della parola2
if (parola1.length < parola2.length) {
    lunga = parola2;
    corta = parola1;
}

//stampare parola2 se è piu corta della parola
else if (parola2.length < parola1.length) {
    lunga = parola1;
    corta = parola2;
}

//in caso l'utente inserisca parola della stessa lunghezza
else {
    console.log('Le parole hanno la stessa lunghezza.') //string
}

//stampare parola piu corta prima 

console.log('Parola corta:' + corta); //string
console.log('parola lunga:' + lunga ); //string


