// ESERCIZIO 1

// Raccolgo elementi dal DOM
// Recupero la parola scritta dall'utente
// Splitto ogni signola lettera della parola
// Faccio un reverse delle lettere
// Creo la funzione e verifico se la parola è palindroma
// Stampo in pagina il risultato

// Recupero gli elementi dal DOM
const userWordField = document.getElementById('word-field');
const palButton = document.getElementById('pal-button');
const palResult = document.getElementById('pal-result');


// Recupero la parola scritta dall'utente
palButton.addEventListener('click', function() {
    userWord = userWordField.value.trim();

    mirroredWord(userWord);
    console.log(userWord);

})

// Creo funzione che specchia la parola
function mirroredWord(userWord) {
    //return userWord.split('').reverse().join('');

    for (let i = userWord.length - 1; i <= 0; i--) {
        userWord.charAt(i);
    }
    return userWord;
}







// ESERCIZIO 2