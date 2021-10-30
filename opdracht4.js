// pseudocode: de voorraad staat in het Main JS bestand.

// Opdracht 4: Schrijf de code uit 3 om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

//Maak/open een normale functie zonder parameter
function brandList() {
// Maak een array = hetzelfde als in opdracht 3:
// het resultaat van de Map methode stop ik in een variabele 'output_brand_list'

    const output_brand_list = inventory.map((brandname) => {
        return brandname.brand;
    });
    console.log('* TV merken functie (alweer 8 resultaten met dubbele namen):',output_brand_list);

// pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='brandlistOutput' heeft
// dit wordt een 'node'
    const brandlistOutputNode = document.getElementById("brandlistOutput");
//zet elke merknaam in een <li> element. Zorg daarna dat deze in de juiste node komt met appendChild
    output_brand_list.forEach(brandValue => {
        let newBrandItem = document.createElement('li');
        newBrandItem.textContent = brandValue;
        brandlistOutputNode.appendChild(newBrandItem);
    })
}

// roep de normale functie aan
brandList();