// Initialize the map centered on Colorado
var map = L.map('map').setView([39.5501, -105.7821], 7); // Center of Colorado

// Define tile layers
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
});
var googleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: '&copy; Google'
});
var googleRoad = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: '&copy; Google'
});
var googleTerrain = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: '&copy; Google'
});

// Add the default base layer
osm.addTo(map);

// Define markers
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]).addTo(map);

// Layer groups
var baseMaps = {
  "OpenStreetMap": osm,
  "Google Satellite": googleSat,
  "Google Road": googleRoad,
  "Google Terrain": googleTerrain
};
var overlayMaps = {
  "Cities": cities
};

// Add a layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(map);
