// chiedo all'user di inserire una parola "palidroma"
const wordUser = prompt("inserisci una parola palidroma!");
console.log(wordUser);

// creo array della parola inserita dall'user
const arrayWordUser = wordUser.split('');
console.log(arrayWordUser);


// inverti ordine
arrayWordUser.reverse();
console.log(arrayWordUser);