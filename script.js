// Initialize the map centered somewhere
var map = L.map('map').setView([40.596395, -105.071878], 13); // Innosphere Coords

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


// Example heatmap points: [lat, lng, intensity (optional)]
var heatData = [
    [40.596395, -105.071878, 0.5],
    [40.600000, -105.065000, 0.8],
    [40.590000, -105.080000, 0.3]
  ];
  
  // Create the heatmap layer
  var heat = L.heatLayer(heatData, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
    gradient: {
      0.4: 'blue',
      0.65: 'lime',
      1: 'red'
    }
  }).addTo(map);
  