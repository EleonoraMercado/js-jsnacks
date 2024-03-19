//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo array con lista invitati.

let listaInvitati = [
    'Luca Rossi', 
    'Giulia Fiori', 
    'Stefano Galli', 
    'Federico Belvedere', 
    'Sara Ercole', 
    'Alessandro Mirra', 
    'Giuliana Casale', 
    'Antonietta Toro', 
    'Giacomo Peltrelli', 
    'Giuseppe Carros'
];  //array


let nomeCognome = prompt('Inserisci il tuo nome e cognome:'); //string
console.log('', nomeCognome);   //string

//inizzializzo variabile a false non sapendo se la persona è invitata o meno.
let invitato = false;

 for (let i = 0; i <= listaInvitati.length; i++) {
    if (nomeCognome == listaInvitati[i]) {
        invitato = true;
        //esce dal ciclo se l'utente viene trovato
        break;
    }
}

//comunico tramite un alert se è nella lista o meno
if (invitato) {
    console.log('Sei nella lista degli invitati', nomeCognome); //string
} else {
    console.log('Non sei nella lista degli invitati', nomeCognome); //string
}


       






