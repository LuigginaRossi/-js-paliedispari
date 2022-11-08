// chiedo all'user di inserire una parola "palidroma"
const wordUser = prompt("inserisci una parola palidroma!");
console.log(wordUser);

// creo array della parola inserita dall'user
const arrayWordUser = wordUser.split('');
console.log("array:"+ arrayWordUser);

// inverti ordine
arrayWordUser.reverse();
console.log("inverto array:"+ arrayWordUser);


//inverto di nuovo ordine array:
//const arrayUserReverse = arrayWordUser.reverse();
//console.log("inverto di nuovo array:"+arrayUserReverse);


/**
 * Controlla che la parola inserita dall'utente sia una parola leggibile anche al contrario
 * @param {String} word  
 */
function checkWordPalidr( word ){
    for (let i = 0; i < arrayWordUser.length; i++) {
// let i = 0;
// i++;
        if( wordUser[i] === arrayWordUser[i]){
            //return "Ottimo lavoro! Hai ins[rito una parola palidroma!";
            console.log("Ottimo lavoro! Hai inserito una parola palidroma!")
        }else{
            alert("Attenzione! La parola non è Palidroma! Ricarica la pagina  prova ancora!")
        }
   }
    
}

checkWordPalidr();

//problemi dopo esecuzione di tutto il cod, la pagina si impalla e da i numeri! :'D