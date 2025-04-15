// Initialize the map centered somewhere
var map = L.map('map').setView([40.596395, -105.071878], 13); // New York City coords

// Add Esri satellite basemap
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri'
}).addTo(map);

// Example GeoJSON overlay (optional)
fetch('data.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: 'red',
        weight: 2,
        fillOpacity: 0.3
      }
    }).addTo(map);
  });

// Example image overlay (optional)
var imageBounds = [[40.70, -74.02], [40.72, -73.99]];
L.imageOverlay('overlay.png', imageBounds).addTo(map);
