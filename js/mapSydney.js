/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let Sydney = L.map('Sydney').setView([-33.8568221, 151.2149901], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Sydney);


let apSydney = L.marker([-33.8568221, 151.2149901]).addTo(Sydney);
apSydney.bindPopup("<b>AP-Datacenter Sydney</b>").openPopup();
