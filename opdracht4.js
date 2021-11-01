// pseudocode: de voorraad staat in het Main JS bestand.

// Opdracht 4 (was 4b): Schrijf de code uit 3 (was: 4a) om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!


// Maak/open een functie met parameter 'objectKey' waarmee je elke key/attribuut uit het TV object kunt invullen
function brandList(objectKey) {
// het resultaat van de Map methode stop ik in een variabele 'output_brand_list2'

    const output_brand_list2 = inventory.map((objectKey) => {
        return objectKey.brand;
    });
    console.log('* alle values van de key:',output_brand_list2);

// pseudocode: maak eerst tags in het HTML bestand, waarvan 1 een ID='brandlistOutput' heeft
// dit wordt een 'node'
    const brandlistOutputNode = document.getElementById("brandlist-output");
//zet elke merknaam in een <li> element. Zorg daarna dat deze in de juiste node komt met appendChild
    output_brand_list2.forEach(brandValue => {
        let newBrandItem = document.createElement('li');
        newBrandItem.textContent = brandValue;
        brandlistOutputNode.appendChild(newBrandItem);
    })
}

// roep de normale functie aan
brandList();