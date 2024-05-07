/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let Amsterdam = L.map('apSmall').setView([52.37899893, 4.90062475], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Amsterdam);


let apMarkerAmsterdam = L.marker([52.37899893, 4.90062475]).addTo(Amsterdam);
apMarkerAmsterdam.bindPopup("<b>AP-Datacenter Amsterdam</b>").openPopup();

let Berlijn = L.map('apSmall').setView([52.54306796, 13.40535164], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Berlijn);


let apMarkerBerlijn = L.marker([52.54306796, 13.40535164]).addTo(Berlijn);
apMarkerBerlijn.bindPopup("<b>AP-Datacenter Berlijn</b>").openPopup();

let NY = L.map('apSmall').setView([40.712776, -74.005974], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(NY);


let apMarkerNY = L.marker([40.712776, -74.005974]).addTo(NY);
apMarkerNY.bindPopup("<b>AP-Datacenter NY</b>").openPopup();

let Parijs = L.map('apSmall').setView([48.84827853, 2.33731627], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Parijs);


let apMarkerParijs = L.marker([48.84827853, 2.33731627]).addTo(Parijs);
apMarkerParijs.bindPopup("<b>AP-Datacenter Parijs</b>").openPopup();

let Sydney = L.map('apSmall').setView([-33.85719805, -77.008950], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Sydney);


let apMarkerSydney = L.marker([-33.85719805, -77.008950]).addTo(Sydney);
apMarkerSydney.bindPopup("<b>AP-Datacenter Sydney</b>").openPopup();

let DC = L.map('apSmall').setView([38.889804, -77.008950], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(DC);


let apMarkerDC = L.marker([38.889804, -77.008950]).addTo(DC);
apMarkerDC.bindPopup("<b>AP-Datacenter Washington DC</b>").openPopup();
