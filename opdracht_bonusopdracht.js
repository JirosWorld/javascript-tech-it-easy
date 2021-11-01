// pseudocode: de voorraad staat in het Main JS bestand.

// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

console.log("\n* Bonus opdracht: Knop 1");

// pseudocode: Sorteer op prijs: functie maken van Sort methode

function sortPrices() {
// let op: hier komt een lijst van 'hele' objecten uit met alle eigenschappen
    const sorted_by_price = inventory.sort(function sorting(a, b) {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    })
    // checken wat er in de array zit en in welke volgorde:
    console.log("Array gesorteerd op prijs:",sorted_by_price);
    // een object kan niet geprint worden, dus stringify methode
    // dit is niet juist maar ik weet niet hoe ik een object kan printen
    priceString = JSON.stringify(sorted_by_price, null, 4);
    // node maken
    document.getElementById("bonus").innerHTML = priceString;
    document.getElementById("bonus").setAttribute("class", "back-yellow");
}
// eventlistener maken
// sla de referentie naar het button-element op
const buttonElement1 = document.getElementById('prices-button');
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttonElement1.addEventListener('click', sortPrices);



console.log("\n* Bonus opdracht: Knop 2");
// Filter op alle AmbiLight toestellen
function getAmbilight() {
    const ambilightTVs = inventory.filter((option) => {
        if ((option.options.ambiLight) === true) {
            return true;
        }
        return false;
    });
    // checken wat er in de array zit en in welke volgorde:
    console.log("Array gefilterd op Ambilight:",ambilightTVs);
    // dit is niet juist maar ik weet niet hoe ik een object kan printen
    ambilightString = JSON.stringify(ambilightTVs, null, 4);
    // node maken
    document.getElementById("bonus").innerHTML = ambilightString;
    document.getElementById("bonus").setAttribute("class", "back-green");
}
// eventlistener maken
const buttonElement3 = document.getElementById('ambilight-button');
buttonElement3.addEventListener('click', getAmbilight);



console.log("\n* Bonus opdracht: Knop 3");
// Een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
function getSoldOut() {
    const soldOut = inventory.filter((stock) => {
        if ((stock.originalStock - stock.sold) === 0) {
            return true;
        }
        return false;
    });
    // checken wat er in de array zit en in welke volgorde:
    console.log("Array gefilterd op uitverkocht:",soldOut);
    // dit is niet juist maar ik weet niet hoe ik een object kan printen
    soldOutString = JSON.stringify(soldOut, null, 4);
    // node maken
    document.getElementById("bonus").innerHTML = soldOutString;
    document.getElementById("bonus").setAttribute("class", "back-pink");
}
// eventlistener maken
const buttonElement2 = document.getElementById('stock-button');
buttonElement2.addEventListener('click', getSoldOut);