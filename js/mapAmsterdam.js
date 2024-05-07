/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let Amsterdam = L.map('Amsterdam').setView([52.37899893, 4.90062475], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Amsterdam);


let apAmsterdam = L.marker([52.37899893, 4.90062475]).addTo(Amsterdam);
apAmsterdam.bindPopup("<b>AP-Datacenter Amsterdam</b>").openPopup();
