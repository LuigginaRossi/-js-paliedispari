// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Se l’utente ha scritto “pari” e la somma è pari, ha vinto l’utente
// Se l’utente ha scritto “pari” e la somma è dispari, ha vinto il pc


const userPrediction = prompt("Inserisci 'pari' se credi che la somma tra il tuo numero e il numero di Ai sarà pari altrimenti inserisci 'dispari'! Buona fortuna! ");
console.log(userPrediction);

const numeroUser =  parseInt(prompt("Inserisci un numero da 1 a 5!"));
console.log(numeroUser);

// const numRandomAi = Math.floor(Math.random() * 5) + 1;
// console.log(numRandomAi);
/**
 * Calcolo un numero random per Ai:
 * @param {number} num 
 */
function calcNumRandomAi ( num ) {
    const numRandomAi = Math.floor(Math.random() * 5) + 1;
    console.log(numRandomAi);

    return numRandomAi;
}

const numAi = calcNumRandomAi();
console.log(numAi);

const risultato = numeroUser + numAi;
console.log("risultato somma" + risultato)
/******************************************
 * Creo funzione per stabilire se il risultato è pari o dispari.
 */

/**
 * Verifico se il risultato della somma è pari o dispari
 * @param {number} num
 */
function checkPariDispari (num){
    if(risultato % 2 === 0){
        return "la somma è pari!";
    }else{
        return "la somma è dispari!";
    }
}

const risultatoSommaPariDispari = checkPariDispari();
console.log(risultatoSommaPariDispari);

/*********************************
 * Dichiariamo chi ha vinto. Se l’utente ha scritto “pari” e la somma è pari, ha vinto l’utente. Se l’utente ha scritto “pari” e la somma è dispari, ha vinto il pc
 */

     if( ((userPrediction === "pari") && (risultato % 2 === 0)) || ((userPrediction === "dispari") && (risultato % 2 === 1))){
        console.log("Vittoria! Supremazia Umana!");
    }  else{
            console.log("Sconfitta! Potere ai robot!")
    }


    //  console.log("Vittoria! Supremazia Umana!");
    // }else{
    //     console.log("Sconfitta! Potere ai robot!")
    // }

    