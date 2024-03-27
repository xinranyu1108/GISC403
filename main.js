
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL


const map = L.map('map').setView([-43.5299, 172.6333], 12);
L.control.scale().addTo(map);
/*
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/cltyydmci01x001raftqa5iwo/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
*/
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/cltyydmci01x001raftqa5iwo/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);

// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.


const marker1 = L.marker([-43.52996100784076, 172.63834875935058]).addTo(map)
	.bindPopup('The Press: This is where I work and collaborate with my team.');

const marker2 = L.marker([-43.5036591272169, 172.59019528821776]).addTo(map)
    .bindPopup('My home: the place where I live and relax.');

const marker3 = L.marker([-43.53097572150117, 172.59642649682547]).addTo(map)
	.bindPopup('Riccarton Paknsave: I shop here for my daily groceries.');

const marker4 = L.marker([-43.4920710877524, 172.56538491867016]).addTo(map)
	.bindPopup('Burnside City Fitness: I exercise here regularly for fitness');

const marker5 = L.marker([-43.52249095465049, 172.58267360542007]).addTo(map)
	.bindPopup('University of Canterbury: I study here, gaining knowledge and skills. ');


// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)

var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: '#000',
		 "weight": 1,
		fillOpacity: 0.3,
		fillColor: "#fed9a6"

	});

geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-43.498762629644155, 172.58213509759824],
		[-43.497749230949495, 172.5948806873797],
		[-43.50406846293235, 172.60221921124662],
		[-43.50602946940837, 172.59912930646055],
		[-43.510013540335756, 172.60359250226267],
		[-43.51228558803316, 172.59492360272395],
		[-43.509079797306114, 172.59239159741315],
		[-43.51060490344975, 172.586726771972]
	],{
		color: '#0570b0',
		weight:3,
		fillOpacity: 0.5,
		fillColor: '#0570b0',
	}).addTo(map).bindPopup("This is Bryndwr, the neighborhood I call home. It's a community rich in friendliness and local charm, making every day here special to me.");


setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();

	var latlngs = [

	[-43.5036591272169, 172.59019528821776],
	[-43.4920710877524, 172.56538491867016],
   [-43.52249095465049, 172.58267360542007],
    [-43.53097572150117, 172.59642649682547],
    [-43.52996100784076, 172.63834875935058]

];

var polyline = L.polyline(latlngs, {color: '#0570b0'}).addTo(map);

}


// END OF DOCUMENT