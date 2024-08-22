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

// Raccolgo elementi dal DOM
// Chiedere all'utente di scegliere tra pari e dispari
// Chiedere all'utente di scegliere un numero da 1 a 5
// Creare una funzione che genera un numero da 1 a 5 
// Sommare il numero scelto dall'utente e il numero generato randomicamente
// Creare una funzione che stabilisce se la somma dei due numeri è pari o dispari
// Stampare in pagina il risultato

// Raccolgo gli elementi dal DOM
const resultElement = document.getElementById('result');

// Chiedere all'utente di scegliere tra pari e dispari
const userChoice = prompt('Scegli "pari" o "dispari"', 'pari');

// Chiedere all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5', 3));
console.log('numero utente: ', userNumber);

// Creo variabile per il numer casuale della CPU
let cpuNumber = 0;

// Creare una funzione che genera un numero da 1 a 5 
function getRandomNumber(cpuNumber) {

    // Calcolo numero casuale da 1 a 5 creando una variabile
    let randomNumber = parseInt(Math.floor(Math.random() * 5) + 1);

    // Sommo il valore di cpuNumber al valore del numero generato randomicamente
    return cpuNumber += randomNumber;
}

// Sfrutto la funzione che genera il numero casuale
getRandomNumber(cpuNumber);
console.log('Funzione numRandom: ', getRandomNumber(cpuNumber));

// Creo variabile che somma il numero casuale della funzione al numero scelto dall'utente
const sum = getRandomNumber(cpuNumber) + userNumber;
console.log('somma: ', sum);

// Creare una funzione che stabilisce se la somma dei due numeri è pari o dispari
function isEven () {
    if (sum % 2 === 0 && userChoice === 'pari') {
        resultElement.innerHTML = `
        <strong>Hai vinto!</strong> Il tuo numero: <strong>${userNumber}</strong>, 
        il numero della CPU è: <strong>${cpuNumber}</strong>
        `;
    } else if (sum % 2 !== 0 && userChoice === 'dispari') {
        resultElement.innerHTML = `
        <strong>Hai vinto!</strong> Il tuo numero: <strong>${userNumber}</strong>, 
        il numero della CPU è: <strong>${cpuNumber}</strong>
        `;

    } else {
        resultElement.innerHTML = `
        <strong>Hai perso!</strong> Il tuo numero: <strong>${userNumber}</strong>, 
        il numero della CPU è: <strong>${cpuNumber}</strong>
        `;
    }
}

isEven();
