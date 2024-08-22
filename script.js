// ESERCIZIO 1

// Raccolgo elementi dal DOM
// Recupero la parola scritta dall'utente
// Creo la funzione e...
// Splitto ogni signola lettera della parola
// Faccio un reverse delle lettere
// Verifico se la parola è palindroma
// Stampo in pagina il risultato

// Recupero gli elementi dal DOM
const userWordField = document.getElementById('word-field');
const palButton = document.getElementById('pal-button');
const palResult = document.getElementById('pal-result');


// Recupero la parola scritta dall'utente
palButton.addEventListener('click', function() {
    // Creo variabile che prende i dati dell'utente
    let userWord = userWordField.value.trim();

    // Aggiungo la funzione che ho creato sotto
    isPolindrome(userWord);
    console.log(isPolindrome(userWord));
})

// Creo funzione che mi di se la parola è palindroma
function isPolindrome(userWord) {
    // Creo variabile per la parola specchiata
    let reversedWord = '';

    //Creo ciclo for che parte dall'ultima lettera della parola scritta
    for (let i = userWord.length - 1; i >= 0; i--) {
        // Aggiungo lettera per lettera e formo la parola specchiata
        reversedWord += userWord.charAt(i);
    }

    console.log('reversed word ', reversedWord); // non ho capito perché lo stampa due volte

    // Controllo  se la parola scritta dall'utente è uguale a quella specchiata
    if (userWord === reversedWord) {
        palResult.innerHTML = `La parola che hai scritto è <strong>palindroma</strong>`;
    } else {
        palResult.innerHTML = `La parola che hai scritto <strong>non</strong> è <strong>palindroma</strong>`;
    }
    // Do il valore che mi serve a return, senno vale undefined
    return userWord;
}


// ESERCIZIO 2