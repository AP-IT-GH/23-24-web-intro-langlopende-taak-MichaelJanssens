/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let NY = L.map('apSmall').setView([40.712776, -74.005974], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(NY);


let apMarker = L.marker([40.712776, -74.005974]).addTo(NY);
apMarker.bindPopup("<b>AP-Datacenter NY</b>").openPopup();
