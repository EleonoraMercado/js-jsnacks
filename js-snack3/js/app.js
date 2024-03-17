//Il software deve chiedere per 10 volte all’utente di inserire un numero.

//inizializzo la variabile risultatoSomma
let risultatoSomma = 0; //number

//inizio ciclo for con prompt

for (let i = 0; i < 10; i++) {
    //converto il risultato del prompt da stringa a numero

    let numero = parseFloat(prompt('Inserisci un numero:'));    //number

   //sommo il numero al risultatoSomma

   risultatoSomma += numero; //number

}
//Il programma stampa la somma di tutti i numeri inseriti.
 console.log('Il tuo risultato è:' + risultatoSomma); //number