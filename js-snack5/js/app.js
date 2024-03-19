//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array. Stampa l'array alla fine.


// let numeri = []; //array
// let numeriPrompt;   //number
// let numeriPari = 0; //number
// let numeriDispari = 0;  //number


//inizio ciclo for

// for (let i = 0; i < 6; i++) {
        //chiedo numeri all'utente
//     let numero = parseFloat(prompt('Inserisci un numero:')); //numer
//     console.log('')

//     if (numeriPrompt % 2 ===0 ) {
//         numeriPari++;
//     } else  {
//         numeriDispari++;
//         numeri.push('numeriDispari')
        
//     }

// }
// console.log('',numeri)


//esercizio funzionante
let numeri = [];    //Array

//ciclo per chiedere di inserire 6 numeri

for (let i = 0; i < 6; i++) {

    //chiedo numeri all'utente
    let numero = parseFloat(prompt('Inserisci un numero:')); //number
    
    //Se il numero è dispari.
    if (numero % 2 !== 0) {
        //inserisci il numero dispari nell'array
        numeri.push(numero);
    }
}

//Stampa l'array con numeri dispari.
console.log('Numeri dispari', numeri);  //number