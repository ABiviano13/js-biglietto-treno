// 0. Definire le variabili nome e cognome e chiederle all'utente
let firstname = document.getElementById ("firstnameticket");
firstname = prompt ("Inserisci il tuo nome");
firstnameticket.innerHTML = firstname;

let lastname = document.getElementById ("lastnameticket");
lastname = prompt ("Inserisci il tuo cognome");
lastnameticket.innerHTML = lastname;


// 1. Definire le variabili
let age = document.getElementById("ageticket");
let km = document.getElementById("kmticket");
let price = document.getElementById("priceticket");

// 2. Chiedere all'utente la propria età
age = prompt ("Inserisci la tua età.");
age = parseInt(age);
console.log ("l'età dell'utente è la seguente:", age);
ageticket.innerHTML = age;

// 3. Chiedere all'utente quanti km vuole percorrere
km = prompt ("Inserisci quanti km desideri percorrere. (0.21 euro al km)");
km = parseInt(km);
console.log ("I kilometri che l'utente ha scelto sono i seguenti:", km);
kmticket.innerHTML = km;

// 4. Definire il prezzo totale in base ai km
let pricekm = 0.21;
let pricetotal = molt = km * pricekm;
console.log (pricekm, pricetotal);
priceticket.innerHTML = pricetotal;

// 5. Sconto del 20% per i minorenni Sconto del 40% per gli over 65 + calcolo per definire il prezzo totale
let discout = document.getElementById ("discountticket")
let discoutprice = document.getElementById("pricediscoutticket")

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
    discout = 0;
    discoutprice = 0;
    console.log ("Mi dispiace, non c'è alcuno sconto per te");
}

discountticket.innerHTML = discout;
pricediscoutticket.innerHTML = discoutprice;



