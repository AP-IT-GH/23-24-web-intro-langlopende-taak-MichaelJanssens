/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let DC = L.map('WashingtonDC').setView([38.889804, -77.008950], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(DC);


let apDC = L.marker([38.889804, -77.008950]).addTo(DC);
apDC.bindPopup("<b>AP-Datacenter Washington DC</b>").openPopup();
