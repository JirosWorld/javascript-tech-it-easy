// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

const output_brand = inventory.map((brandname) => {
    return brandname.brand;
});
console.log('* TV merken (8 resultaten met dubbele namen):',output_brand);

const brand_Dashboard = document.getElementById("brand");
console.log(brand_Dashboard);
brand_Dashboard.textContent = output_brand;