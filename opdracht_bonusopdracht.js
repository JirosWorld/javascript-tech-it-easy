// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

// code uit opdracht 2:
function getBrands() {
    const output_brand = inventory.map((brandname) => {
        return brandname.brand;
    });
    console.log('* TV merken (8 resultaten met dubbele namen):',output_brand);

    const brand_Dashboard = document.getElementById("bonus");
    console.log(brand_Dashboard);
    brand_Dashboard.textContent = output_brand;
}
// sla de referentie naar het button-element op
const buttonElement = document.getElementById('brands-button');

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttonElement.addEventListener('click', getBrands);





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
const buttonElement1 = document.getElementById('stock-button');

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttonElement.addEventListener('click', getSoldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// pseudocode: we willen resultaten filteren waar meerdere waarden getoond worden, dus: Filter methode
// let op: hier komt een lijst van 'hele' objecten uit met alle eigenschappen
const output1c = inventory.filter((option) => {
    if ((option.options.ambiLight) === true) {
        return true;
    }
    return false;
});
console.log("\n* Opdracht 1c");
console.log('* Toestellen met AmbiLight (2 resultaten):',output1c);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// pseudocode: we willen dezelfde array behouden, dus: Sort methode
// let op: hier komt een lijst van 'hele' objecten uit met alle eigenschappen

// waarde A is steeds de Huidige waarde, en waarde B is steeds de Vorige
inventory.sort(function sorting(a, b)  {
    // als a groter is dan b, geef een positief getal terug
    if (a.price > b.price) {
        return 1;
    }
    // als a kleiner is dan b, geef een negatief getal terug
    if (a.price <  b.price) {
        return -1;
    }
    // als bovenstaande condities allebei niet waar zijn,
    // zijn de waardes even groot
    return 0;
});
console.log("\n* Opdracht 1d");
console.log("* Gesorteerd van laag naar hoog (709 is hoogste):",inventory);