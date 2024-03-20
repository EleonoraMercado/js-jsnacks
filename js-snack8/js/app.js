//Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. 
//Se il numero scelto dall'utente è uguale al numero del computer
// informate l'utente che ha vinto, altrimenti ha perso. 
//A questo punto fate giocare l'utente, fintanto che non vince la partita contro il PC :)

document.getElementById('formNumeri').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recupero il valore dal form
    let numeroElement = parseFloat(document.getElementById('numero').value);  // number

    // Dichiaro variabile numero vincente falsa
    let numeroVincente = false; // boolean
    
    // Inizio ciclo finché il numero vincente è falso
    let i = 0;
    while (i < 10 && !numeroVincente) {
        let numeroCasuale = Math.floor(Math.random() * 11);
        console.log("Numero casuale " + i + ": " + numeroCasuale);  // string

        if (numeroElement === numeroCasuale) {
            numeroVincente = true;  // boolean
    
            // Stampare biglietto in caso di vincita
            let haiVintoStampa = `
            <div class="card col-6 text-bg-info text-white mb-3 mx-auto">
                <div class="card-header fs-3 text-center text-uppercase">&#127873 Complimenti! </div>
                <div class="card-body">
                    <h5 class="card-title text-center">Hai vinto.</h5>
                </div>
            </div>`;

            // Stampare nella pagina html
            document.getElementById('stampaVinto').innerHTML = haiVintoStampa;  // string

            // Nascondere il form dopo invia
            document.getElementById('formNumeri').style.display = 'none';   // string

            // Esco dal ciclo se ha vinto
            break;
        }
        
        i++;
    }

    if (!numeroVincente) {
        // Stampare biglietto perdita
        let haiPersoStampa = `
        <div class="card col-6 text-bg-dark text-white mb-3 mx-auto">
            <div class="card-header fs-3 text-center text-uppercase">&#10060 Mi dispiace!</div>
            <div class="card-body">
                <h5 class="card-title text-center">Non hai vinto.</h5>
            </div>
        </div>`;
                    
        // Stampare nella pagina html
        document.getElementById('stampaPerso').innerHTML = haiPersoStampa;  // string
                    
        // Nascondere il form dopo invia
        document.getElementById('formNumeri').style.display = 'none';   // string
    }
});

//ho replicato l'esercizio snack6 modificando il ciclo, ho utilizzato while invece che for e modificato qualche dettaglio