// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
var marker1 = L.marker([40.712, -74.006], {
  draggable: true,
  title: "New York Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker1.bindPopup("NYC!");

var marker2 = L.marker([41.878, -87.629], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker2.bindPopup("Chicago");

var marker3 = L.marker([29.760, -95.369], {
  draggable: true,
  title: "Chicago Markerr"
}).addTo(myMap);

// Binding a pop-up to our marker
marker3.bindPopup("Houston");

var marker4 = L.marker([34.052, -118.243], {
  draggable: true,
  title: "Los Angeles Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker4.bindPopup("Los Angeles");



// Add code to create a marker for each city below and add it to the map

// newyork;  40.7128° N, 74.0060° W
// chicago; 41.8781° N, 87.6298° W
// houston; 29.7604° N, 95.3698° W
// la; 34.0522° N, 118.2437° W
// omaha; 41.2565° N, 95.9345° W
