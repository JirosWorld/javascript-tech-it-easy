// pseudocode: de voorraad staat in het Main JS bestand.

console.log("\n* Opdracht 5a");
// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
//

// Ik maak een functie met een parameter voor 'inventory[index]' waarmee je elke key-met-index uit het TV object kunt invullen
function TVoutputString(indexBrand) {
    const output_tv_attributes = inventory[indexBrand].brand + " " + inventory[indexBrand].type + " - " + inventory[indexBrand].name;
    return output_tv_attributes;
}
// roep de functie aan + testresultaten voor 1 TV
console.log(TVoutputString(0));
console.log(TVoutputString(3));
console.log(TVoutputString(7));


console.log("\n* Opdracht 5b");
// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.
// pseudocode: return "€" + priceValue + ",-";
// ik interpreteer deze opdracht als een simpele formule, zonder object
// dus dit hoeft volgens mij NIET:
// const AllPrices = inventory.map((oneprice) => {
//     return "€" + oneprice.price  + ",-";
// });
// console.log(AllPrices);

function formatPrice(priceValue) {
    return "€" + priceValue + ",-";
}
// roep de functie aan + tests
console.log(formatPrice(379));
console.log(formatPrice(33.33));


console.log("\n* Opdracht 5c");
// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.
//
// pseudocode: inventory[index].availableSizes voor elke TV index
// pseudocode: ik ga een stringarray maken met ddde Map methode
// pseudocode: omrekenen inch = [availableSizes] * 2,54 centimeter

// Jiro: Hier kom ik niet uit want het lukt me niet om 1 uitkomst te pakken als er meerdere sizes zijn

function availableSizeValues(index) {
    let availableSizeOutput = inventory[index].availableSizes;
    if (availableSizeOutput.length > 1) {
        availableSizeOutput = inventory[index].availableSizes + " | ";
    }
    const resolution = ( "Beschikbare groottes (inch/cm): " + (availableSizeOutput) + " inch (" + ((availableSizeOutput) * 2.54) + " cm).");
    return resolution;
}
// aanroepen, werkt alleen bij 1 resultaat:
console.log(availableSizeValues(0));
console.log(availableSizeValues(1));
console.log(availableSizeValues(2));
console.log(availableSizeValues(3));
console.log(availableSizeValues(4));
console.log(availableSizeValues(5));
console.log(availableSizeValues(6));
console.log(availableSizeValues(7));



console.log("\n* Opdracht 5d");
// Opdracht 5d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//

/*
* Jiro: omdat ik er niet uitkom, maak ik nu alleen die onderdelen die wél lukken:
* met alleen de waarde van TV met index=1
*/


console.log("\n* Opdracht 5e");
// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

/*
* Jiro: deze is niet goed, ik kom er nog niet uit
*/

function allScreenSizes() {
    const screenSizes = inventory.map((screenSize) => {
        // for-loop nodig om alle indexen te pakken
        for (let i = 0; i < inventory.length; i++) {
            console.log("Alle inhoud van array: " + screenSize.availableSizes);
            return ((screenSize.availableSizes) + " inch (" + ((screenSize.availableSizes) * 2.54) + " cm). | ");
        }
        // let sizeNumber = screenSize.availableSizes[0];
        // return ("sizenumber:" + sizeNumber + " inch (" + (sizeNumber * 2.54) + " cm). | ");
    });
}

console.log("AllScreenSizes",allScreenSizes());