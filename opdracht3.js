// pseudocode: de voorraad staat in het Main JS bestand.

// Opdracht 3: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// pseudocode: we willen een nieuwe array maken die álle waarden van 1 attribuut van de oorspronkelijke toont, dus: Map methode.
const output_brand = inventory.map((brandname) => {
    return brandname.brand;
});
console.log('* TV merken (8 resultaten met dubbele namen):',output_brand);

const brand_Dashboard = document.getElementById("brand");
console.log(brand_Dashboard);
brand_Dashboard.textContent = output_brand;