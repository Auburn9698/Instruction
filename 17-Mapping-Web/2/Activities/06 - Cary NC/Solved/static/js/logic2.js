// Creating map object
var myMap = L.map("map", {
  center: [35.760, -78.813],
  zoom: 11
});



// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var link = "static/data/parks.geojson";

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
console.log(data)
L.geoJson(data, {

  // Called on each feature
  onEachFeature: function(feature, layer) {

    // Giving each feature a pop-up with information pertinent to it
    layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr>  <h3>" 
    + " Address: " + feature.properties.fulladdr + "</h3> <h3>" 
    + "Operating Days: " + feature.properties.operdays + "</h3> <h3>" 
    + "Restrooms: " + feature.properties.restroom + "</h3>");

  }
}).addTo(myMap);
});
