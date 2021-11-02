// pseudocode: de voorraad staat in het Main JS bestand.

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// pseudocode: (Aantal verkocht) = (sold), maar dan geloopt/opgeteld over álle objecten
// pseudocode: De for-loop wordt gebruikt om een array te itereren. We kunnen de loop gebruiken om alle getallen in een array op te tellen en op te slaan in een variabele.
// pseudocode: We initialiseren een variabele som (sumSold) = 0 om het resultaat op te slaan, en gebruiken de for-lus om elk element te 'bezoeken' en toe te voegen aan de som van de array:

let sumSold = 0;

for (let i = 0; i < inventory.length; i++) {
    sumSold += inventory[i].sold;
}
console.log("Verkocht totaal:" + sumSold + ".");

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='totalsold' heeft
// om deze variabele te tonen in de HTML, gebruik ik de .textContent methode
const totalsold_Dashboard = document.getElementById("totalsold");
console.log(totalsold_Dashboard);
totalsold_Dashboard.textContent = sumSold + ".";


// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// pseudocode: (Aantal ingekocht) = (originalStock), maar dan geloopt/opgeteld over álle objecten
// pseudocode: ik gebruik weer een For Loop om de aantallen in 1 variabele op te slaan

let sumBoughtStock = 0;

for (let i = 0; i < inventory.length; i++) {
    sumBoughtStock += inventory[i].originalStock;
}
console.log("Ingekochte voorraad:",sumBoughtStock);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='totalsold' heeft
// om deze variabele te tonen in de HTML, gebruik ik de .textContent methode
const boughtstock_Dashboard = document.getElementById("boughtstock");
console.log(boughtstock_Dashboard);
boughtstock_Dashboard.textContent = sumBoughtStock + ".";


// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
// pseudocode: het aantal TV's dat nog verkocht moet worden = sumBoughtStock - sumSold

const remainingToBeSold = sumBoughtStock - sumSold;

// om deze variabele te tonen in de HTML, gebruik ik nu als extra oefening de innerHTML manier, hoewel die eigenlijk niet mag,
// maar uiteraard kan dit ook met de .textContent methode
const remains_Dashboard = document.getElementById("remains");
remains_Dashboard.innerHTML = `
    <span>Het aantal TV's dat nog verkocht moet worden: <em>${remainingToBeSold}.</em></span>
`;