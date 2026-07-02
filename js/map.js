const mapContainer = document.getElementById("fullMap") || document.getElementById("map");

if (mapContainer && typeof L !== "undefined" && Array.isArray(areas)) {
  const map = L.map(mapContainer).setView([61.4978, 23.7610], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  areas.forEach(area => {
    L.marker([area.lat, area.lng])
      .addTo(map)
      .bindPopup(`
        <strong>${area.name}</strong><br>
        Family Score: ${area.familyScore}/100<br>
        Safety: ${area.safety}<br>
        Schools nearby: ${area.schools}<br>
        Playgrounds: ${area.playgrounds}<br>
        Traffic Risk: ${area.traffic}<br><br>
        <a href="ar.html">Start AR Scan</a><br>
        <a href="area.html">View Area Details</a>
      `);
  });
}