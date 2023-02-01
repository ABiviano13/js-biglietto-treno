// 0. Definire le variabili nome e cognome e chiederle all'utente
let FirstName = document.getElementById ("firstnameticket");
FirstName = prompt ("Inserisci il tuo nome");
firstnameticket.innerHTML = FirstName;

let LastName = document.getElementById ("lastnameticket");
LastName = prompt ("Inserisci il tuo cognome");
lastnameticket.innerHTML = LastName;


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
let PriceKm = 0.21;
let PriceTotal = molt = km * PriceKm;
console.log (PriceKm, PriceTotal);
priceticket.innerHTML = PriceTotal;

// 5. Sconto del 20% per i minorenni Sconto del 40% per gli over 65 + calcolo per definire il prezzo totale
let Discout = document.getElementById ("discountticket")
let DiscoutPrice = document.getElementById("pricediscoutticket")

if ( age < 18) {
    Discout = (PriceTotal * 20) / 100;
    console.log ("Questo è lo sconto per i minorenni :", Discout);
    DiscoutPrice = PriceTotal - Discout;
    DiscoutPrice = Math.floor (DiscoutPrice);
    console.log ("Questo è il prezzo per i minorenni :", DiscoutPrice);
} 
else if ( age > 65) {
    Discout = (PriceTotal * 40) / 100;
    console.log ("Questo è lo sconto per gli over 65 :", Discout);
    DiscoutPrice = PriceTotal - Discout;
    DiscoutPrice = Math.floor (DiscoutPrice);
    console.log ("Questo è il prezzo per gli over 65 :", DiscoutPrice);
} else {
    Discout = 0;
    DiscoutPrice = 0;
    console.log ("Mi dispiace, non c'è alcuno sconto per te");
}

discountticket.innerHTML = Discout;
pricediscoutticket.innerHTML = DiscoutPrice;



