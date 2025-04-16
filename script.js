// Initialize the map centered on Colorado
var map = L.map('map').setView([39.5501, -105.7821], 7); // Center of Colorado

// Add Esri satellite basemap
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri'
}).addTo(map);

// Generate a bunch of heatmap points across Colorado
var heatData = [
  [40.0150, -105.2705, 1], // Boulder
  [39.7392, -104.9903, 1], // Denver
  [38.8339, -104.8214, 1], // Colorado Springs
  [39.1911, -106.8175, 1], // Aspen
  [38.2544, -104.6091, 1], // Pueblo
  [40.5853, -105.0844, 1], // Fort Collins
  [37.2753, -107.8801, 1], // Durango
  [39.5501, -107.3248, 1], // Glenwood Springs
  [37.7749, -106.2903, 1], // Alamosa
  [39.6403, -106.3742, 1], // Vail
  [38.9972, -105.0569, 1], // Woodland Park
  [40.49, -105.07, 1], // Loveland
  [40.03, -105.24, 1], // Longmont
  [37.47, -105.87, 1], // San Luis
  [39.76, -104.88, 1], // Aurora
  [39.55, -104.94, 1]  // Highlands Ranch
];

// Heatmap layer with boosted settings
var heat = L.heatLayer(heatData, {
  radius: 50,         // Bigger spread
  blur: 40,           // Softer edges
  maxZoom: 10,        // Visible from farther out
  gradient: {
    0.2: 'blue',
    0.4: 'lime',
    0.6: 'yellow',
    0.8: 'orange',
    1: 'red'
  }
}).addTo(map);
