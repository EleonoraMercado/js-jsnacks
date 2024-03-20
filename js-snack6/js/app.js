//Fate generare un numero random da 0 a 10 al computer, 
//e chiedete all'utente di inserire un suo numero. 
//Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, 
//altrimenti ha perso.

document.getElementById('formNumeri').addEventListener('submit', function(event) {
    event.preventDefault();

    //recupero il valore dal form
    let numeroElement = parseFloat(document.getElementById('numero').value);  //number

    //dichiaro variabile numero vincente falsa
    let numeroVincente = false; //boolean
    
    //inizio ciclo false stabilendo che se il numero inserito coincide con uno dei 10 random è vera
    for (let i = 0; i < 10; i++) {
        let numeroCasuale = Math.floor(Math.random() * 11);
        console.log("Numero casuale " + i + ": " + numeroCasuale);  //string

        if (numeroElement === numeroCasuale) {
            numeroVincente = true;  //boolean
    
            //stampare biglitto in caso di vincita
            let haiVintoStampa = `
            <div class="card col-6 text-bg-info text-white mb-3 mx-auto">
                <div class="card-header fs-3 text-center text-uppercase">&#127873 Complimenti! </div>
                <div class="card-body">
                    <h5 class="card-title text-center">Hai vinto un regalo.</h5>
                </div>
            </div>`;

            //stampare nella pagina html
            document.getElementById('stampaVinto').innerHTML = haiVintoStampa;  //string

            //nascondere il form dopo invia
            document.getElementById('formNumeri').style.display = 'none';   //string

            //esco dal ciclo se ha vinto
            break;

        } 
    }

    if (!numeroVincente) {
        //stampare biglietto perdita
        let haiPersoStampa = `
        <div class="card col-6 text-bg-dark text-white mb-3 mx-auto">
            <div class="card-header fs-3 text-center text-uppercase">&#10060 Mi dispace!</div>
            <div class="card-body">
                <h5 class="card-title text-center">Non hai vinto.</h5>
            </div>
        </div>`;
                    
        //stampare nella pagina html
        document.getElementById('stampaPerso').innerHTML = haiPersoStampa;  //string
                    
        //nascondere il form dopo invia
        document.getElementById('formNumeri').style.display = 'none';   //string
        }
    

});










