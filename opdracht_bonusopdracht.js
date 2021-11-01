// pseudocode: de voorraad staat in het Main JS bestand.

// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

console.log("\n* Bonus opdracht:");
// pseudocode: Sorteer op prijs: functie maken van Sort methode

function sortPrices(){
// let op: hier komt een lijst van 'hele' objecten uit met alle eigenschappen
    const sorted_by_price = inventory.sort(function sorting(a, b)  {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price <  b.price) {
            return -1;
        }
        return 0;
    })
    console.log("* Gesorteerd van laag naar hoog (709 is hoogste):",inventory);
    // return sorted_by_price;
    const prices_Dashboard = document.getElementById("bonus");
    console.log(prices_Dashboard);
//zet elke prijs in een <li> element
    sorted_by_price.forEach(oneprice => {
        let priceItem = document.createElement('li');
        priceItem.textContent = oneprice;
        prices_Dashboard.appendChild(priceItem);
    })
// sla de referentie naar het button-element op
    const buttonElement1 = document.getElementById('prices-button');
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
    buttonElement1.addEventListener('click', sortPrices);
}






// Een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
function getSoldOut() {
    const soldOut = inventory.filter((stock) => {
        if ((stock.originalStock - stock.sold) === 0) {
            return true;
        }
        return false;
    });
    return soldOut;
}
console.log('* Uitverkochte toestellen (2 resultaten):',soldOut);
// sla de referentie naar het button-element op
const buttonElement2 = document.getElementById('stock-button');

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttonElement2.addEventListener('click', getSoldOut);

// Filter op alle AmbiLight toestellen
function getAmbilight() {
    const output1c = inventory.filter((option) => {
        if ((option.options.ambiLight) === true) {
            return true;
        }
        return false;
    });
    console.log("\n* Opdracht 1c");
    console.log('* Toestellen met AmbiLight (2 resultaten):',output1c);
}
// sla de referentie naar het button-element op
const buttonElement3 = document.getElementById('ambilight-button');
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttonElement3.addEventListener('click', getAmbilight);