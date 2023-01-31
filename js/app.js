// 1. Definire le variabili km - età
let km = document.getElementById("km-ticket");
let age = document.getElementById("age-ticket");

// 2. Chiedere all'utente quanti km vuole percorrere
km = prompt ("Inserisci quanti km desideri percorrere. (0.21 euro al km)");
km = parseInt(km);
console.log ("I kilometri che l'utente ha scelto sono i seguenti:", km);

// 3. Chiedere all'utente la propria età
age = prompt ("Inserisci la tua età.");
age = parseInt(age);
console.log ("l'età dell'utente è la seguente:", age);

// 4. Definire il prezzo totale in base ai km
let pricekm = 0.21;
let pricetotal = molt = km * pricekm;
console.log (pricekm, pricetotal);

// 5. Sconto del 20% per i minorenni Sconto del 40% per gli over 65 + calcolo per definire il prezzo totale
let discout = document.getElementById ("discount-ticket")

if ( age < 18) {
    discout = (pricetotal * 20) / 100;
    console.log ("Questo è lo sconto per i minorenni :", discout);
    discoutprice = pricetotal - discout;
    discoutprice = Math.floor (discoutprice);
    console.log ("Questo è il prezzo per i minorenni :", discoutprice);
} 
else if ( age > 65) {
    discout = (pricetotal * 40) / 100;
    console.log ("Questo è lo sconto per gli over 65 :", discout);
    discoutprice = pricetotal - discout;
    discoutprice = Math.floor (discoutprice);
    console.log ("Questo è il prezzo per gli over 65 :", discoutprice);
} else {
    discoutprice = 0;
    console.log ("Mi dispiace, non c'è alcuno sconto per te")
}

