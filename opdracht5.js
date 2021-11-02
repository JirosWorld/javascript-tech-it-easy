// pseudocode: de voorraad staat in het Main JS bestand.

console.log("\n* Opdracht 5a");
// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.
//

// Ik maak een functie met een parameter voor 'inventory[index]' waarmee je elke key-met-index uit het TV object kunt invullen
function TVoutputString(indexMake) {
    const output_tv_attributes = inventory[indexMake].brand + " " + inventory[indexMake].type + " - " + inventory[indexMake].name;
    return output_tv_attributes;
}
// roep de functie aan + testresultaten voor 1 TV
console.log(TVoutputString(0));
console.log(TVoutputString(3));
console.log(TVoutputString(7));
// hoeft niet, maar omwille van testen, toch in HTML afbeelden:
const tv_output_Dashboard = document.getElementById("five-a");
console.log(tv_output_Dashboard);
// toon 1 TV in HTML:
tv_output_Dashboard.textContent = TVoutputString(3);



console.log("\n* Opdracht 5b");
// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.
// pseudocode: return "€" + priceValue + ",-";
// als je deze opdracht als een simpele formule interpreteert, zonder object, dan wordt het dit:

function formatPrice(priceValue) {
    return "€" + priceValue + ",-";
}
// roep de functie aan + een test
console.log("Met ingevulde objectwaarde:",formatPrice(709));
console.log("Met variabele objectwaarde:",formatPrice(inventory[2].price));

// maar dit kan ook, met alle bestaande prijzen er in, wel als object:
const AllPrices = inventory.map((oneprice) => {
    return "€" + oneprice.price  + ",-";
});
console.log(AllPrices);
const priceList = document.getElementById("five-b");
console.log(priceList);
priceList.textContent = AllPrices;



console.log("\n* Opdracht 5c");
// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.
//
// pseudocode: inventory[index].availableSizes voor elke TV index
// eigenlijk moet ik een Slice() hebben uit elke array
// pseudocode: ik ga een stringarray maken met de Map methode
// pseudocode: omrekenen inch = [availableSizes] * 2,54 centimeter

// Jiro: Hier kom ik niet uit want het lukt me niet om 1 uitkomst te pakken als er meerdere sizes zijn
// bovendien zijn dit nog integers, en ik denk dat ik .toString().substring(startindex,volgendeindex) zou moeten gebruiken

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

// Deze is niet goed, maar omwille van testen, toch in HTML afbeelden:
const availableSize_output_Dashboard = document.getElementById("five-c");
console.log(availableSize_output_Dashboard);
// toon 1 TV object in HTML:
availableSize_output_Dashboard.textContent = availableSizeValues(5);



console.log("\n* Opdracht 5d");
// Opdracht 5d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//
/*
* Jiro: omdat ik er niet uitkom, maak ik nu alleen die onderdelen die wél lukken:
* met alleen de waarde van TV met index=6
*/
const information_oneTV_Dashboard = document.getElementById("five-d");
information_oneTV_Dashboard.innerHTML = `
    <p>[merk] [type] - [naam]: <em>${TVoutputString(6)}.</em></p>
    <p>[prijs]: <em>${formatPrice(inventory[6].price)}.</em></p>
    <p>Beschikbare resoluties voor dit type: <em>${availableSizeValues(6)}.</em></p>
`;


// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
console.log("\n* Opdracht 5e");
/*
* Jiro: deze is niet goed, ik kom er nog niet uit
*/
function allScreenAttributes() {
        let information_allTVs_Dashboard = document.getElementById("five-e");
        // mislukte poging om door alle objectindexen te loopen:
        for (let i = 0; i < inventory.length; i++) {
            console.log("waarde van i:",i);
            information_allTVs_Dashboard.innerHTML = `
            <p>TV nr ${i}: <em>${TVoutputString(i)}.</em></p>
            <p>[prijs]: <em>${formatPrice(inventory[i].price)}.</em></p>
            <p>Beschikbare resoluties voor dit type: <em>${availableSizeValues(i)}.</em></p>
        `;

        }
}
allScreenAttributes();