/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let Parijs = L.map('Parijs').setView([48.84827853, 2.33731627], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Parijs);


let apParijs = L.marker([48.84827853, 2.33731627]).addTo(Parijs);
apParijs.bindPopup("<b>AP-Datacenter Parijs</b>").openPopup();
