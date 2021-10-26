

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// pseudocode: (Aantal verkocht) = (sold), maar dan geloopt/opgeteld over álle objecten
// pseudocode: De for-loop wordt gebruikt om een array te itereren. We kunnen de loop gebruiken om alle getallen in een array op te tellen en op te slaan in een variabele.
// pseudocode: We initialiseren een variabele som (sumSold) als 0 om het resultaat op te slaan en gebruiken de for-lus om elk element te bezoeken en toe te voegen aan de som van de array.
let sumSold = 0;

for (let i = 0; i < inventory.length; i++) {
    sumSold += inventory[i].sold;
}
console.log("Verkocht totaal:",sumSold);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='' heeft
const soldTV = document.getElementById("totalsold");
console.log(soldTV);
soldTV.textContent = sumSold;

const sumTotal = document.getElementById("total-sold");
sumTotal.innerHTML = `
    <h5>• ${sumSold}</h5>
    \t<p><em>verkcoht nu: ${inventory[7].sold}</em></p>
`;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.