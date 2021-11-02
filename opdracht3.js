// pseudocode: de voorraad staat in het Main JS bestand.

// Opdracht 3: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// pseudocode: we willen een nieuwe array maken die álle waarden van 1 attribuut van de oorspronkelijke toont, dus: Map methode.
// het resultaat van de Map methode stop ik in een variabele 'output_brand'
const output_brand = inventory.map((brandname) => {
    return brandname.brand;
});
console.log('* TV merken (8 resultaten met dubbele namen):',output_brand);

//niet-nette methode, met alle namen achterelkaar:
// pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='brandlist' heeft
const brand_Dashboard = document.getElementById("brandlist");
console.log(brand_Dashboard);
// om deze variabele te tonen in de HTML, kun je ook de .textContent methode gebruiken, maar...
// ...dit resulteert in een niet-nette regel, met alle namen achterelkaar:
// brand_Dashboard.textContent = output_brand;

//kan ook netter door er echt een lijst van te maken:
//zet elke merknaam in een <p> element. Zorg daarna dat deze in de juiste node komt met appendChild
output_brand.forEach(brandname => {
    let brandContent = document.createElement('p');
    brandContent.textContent = brandname;
    brand_Dashboard.appendChild(brandContent);
})