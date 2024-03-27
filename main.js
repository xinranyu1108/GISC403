
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL


const map = L.map('map').setView([-43.5299, 172.6333], 11);
L.control.scale().addTo(map);

const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/cltyydmci01x001raftqa5iwo/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);

//Routing services
L.Routing.control({
    waypoints: [
        L.latLng(-43.5036591272169, 172.59019528821776),
        L.latLng(-43.4920710877524, 172.56538491867016),
        L.latLng(-43.52249095465049, 172.58267360542007),
        L.latLng(-43.53097572150117, 172.59642649682547),
        L.latLng(-43.52996100784076, 172.63834875935058),

    ],
    lineOptions: {
        styles: [{ color: '#0570b0', weight: 4 }]
    },
    routeWhileDragging: false,
    geocoder: false,
    show: false,
    createMarker: function() {
        return null;
    },
    fitSelectedRoutes: false
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(-43.52996100784076, 172.63834875935058),
        L.latLng(-43.58540912503021, 172.70752891400159)
    ],
    lineOptions: {
        styles: [{ color: 'orange', weight: 4, dashArray: '10, 10' }]
    },
    routeWhileDragging: false,
    geocoder: false,
    show: false,
    createMarker: function() {
        return null;
    },
    fitSelectedRoutes: false

}).addTo(map)

// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.

const marker1 = L.marker([-43.52996100784076, 172.63834875935058]).addTo(map)
	.bindPopup('The Press: This is where I work and collaborate with my team.', { autoPan: false });

const marker2 = L.marker([-43.5036591272169, 172.59019528821776]).addTo(map)
    .bindPopup('My home: the place where I live and relax.', { autoPan: false });

const marker3 = L.marker([-43.53097572150117, 172.59642649682547]).addTo(map)
	.bindPopup('Riccarton Paknsave: I shop here for my daily groceries.', { autoPan: false });

const marker4 = L.marker([-43.4920710877524, 172.56538491867016]).addTo(map)
	.bindPopup('Burnside City Fitness: I exercise here regularly for fitness', { autoPan: false });

const marker5 = L.marker([-43.52249095465049, 172.58267360542007]).addTo(map)
	.bindPopup('University of Canterbury: I study here, gaining knowledge and skills. ', { autoPan: false });


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
		[-43.58538204284684, 172.70567627378378],
		[-43.58484071960974, 172.70910973359443],
		[-43.589110069040714, 172.7157818954866],
		[-43.5947081261643, 172.70560711515918]
	],{
		color: 'orange',
		weight:4,
		fillOpacity: 0.5,
		fillColor: 'orange',
	}).addTo(map).bindPopup("Christchurch Gondola: My favorite hiking spot. I visit here occasionally for a good workout or to hang out with friends.")

setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}




// END OF DOCUMENT