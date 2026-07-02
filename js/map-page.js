const map = L.map("fullMap").setView([61.4978, 23.761], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const areas = [
  {
    name: "Kaleva",
    lat: 61.4996,
    lng: 23.8084,
    familyScore: 86,
    safetyScore: 84,
    developmentType: "Mixed old and new development area",
    oldBuildings: "65%",
    newBuildings: "35%",
    traffic: "Medium",
    familyRatio: "42%",
  },
  {
    name: "Hervanta",
    lat: 61.4485,
    lng: 23.8569,
    familyScore: 82,
    safetyScore: 78,
    developmentType: "Developing residential area",
    oldBuildings: "55%",
    newBuildings: "45%",
    traffic: "Medium",
    familyRatio: "39%",
  },
  {
    name: "Tampella",
    lat: 61.5064,
    lng: 23.7629,
    familyScore: 78,
    safetyScore: 80,
    developmentType: "New development area",
    oldBuildings: "25%",
    newBuildings: "75%",
    traffic: "High",
    familyRatio: "31%",
  },
  {
    name: "Pispala",
    lat: 61.5034,
    lng: 23.7005,
    familyScore: 80,
    safetyScore: 85,
    developmentType: "Older traditional residential area",
    oldBuildings: "80%",
    newBuildings: "20%",
    traffic: "Low",
    familyRatio: "36%",
  },
];

areas.forEach((area) => {
  L.marker([area.lat, area.lng]).addTo(map).bindPopup(`
      <h3>${area.name}</h3>
      <b>Development:</b> ${area.developmentType}<br>
      <b>Old buildings:</b> ${area.oldBuildings}<br>
      <b>New buildings:</b> ${area.newBuildings}<br><br>

      <b>Family ratio:</b> ${area.familyRatio}<br>
      <b>Family Score:</b> ${area.familyScore}/100<br>
      <b>Safety Score:</b> ${area.safetyScore}/100<br>
      <b>Traffic risk:</b> ${area.traffic}<br><br>

      <a class="popup-btn" href="ar.html">Start AR Scan</a>
      <a class="popup-btn" href="area.html">View Area Details</a>
    `);
});
