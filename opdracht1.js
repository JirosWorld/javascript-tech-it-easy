/*
door Jiro
*/
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// pseudocode: de voorraad staat in het Main JS bestand.

// pseudocode: we willen een nieuwe array maken die álle waarden van 1 attribuut van de oorspronkelijke toont, dus: Map methode.
const output1a_type = inventory.map((typename) => {
    return typename.type;
});
console.log("\n* Opdracht 1a");
console.log('* TV types: (8 resultaten)',output1a_type);
// ik weet niet of de opdracht inderdaad het Type bedoelt of de Naam, anders moet het zo:
const output1a_name = inventory.map((name) => {
    return name.name;
});
console.log('* TV naam: (8 resultaten)',output1a_name);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// pseudocode: we willen resultaten filteren waar meerdere waarden getoond worden, dus: Filter methode
// let op: hier komt een lijst van 'hele' objecten uit met alle eigenschappen
// Uitverkocht = originalStock - sold, dus: die objectkeys/methoden moet je aanroepen en met elkaar in een formule stoppen zodat de objectvalues vanelkaar worden afgetrokken:
const output1b = inventory.filter((stock) => {
    if ((stock.originalStock - stock.sold) === 0) {
        return true;
    }
    return false;
});
console.log("\n* Opdracht 1b");
console.log('* Uitverkochte toestellen (2 resultaten):',output1b);

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