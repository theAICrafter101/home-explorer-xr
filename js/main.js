function goToAR() {
  window.location.href = "ar.html";
}

function goToArea() {
  window.location.href = "area.html";
}

function goToMap() {
  window.location.href = "map.html";
}

function toggleDark() {
  document.body.classList.toggle("dark-mode");
}
function goToAnalysis() {
  window.location.href = "analysis.html";
}
function openGallery() {
  document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

function recommendProperty() {
  const resultBox = document.getElementById("recommendationResult");

  if (!resultBox) {
    return;
  }

  const selected = Array.from(
    document.querySelectorAll(".preference-box input:checked")
  ).map(input => input.value);

  const userText = document.getElementById("userText");
  const text = userText ? userText.value.toLowerCase() : "";

  let kalevaScore = 0;
  let hervantaScore = 0;

  if (selected.includes("school") || text.includes("school")) {
    kalevaScore += 3;
    hervantaScore += 2;
  }

  if (selected.includes("tram") || text.includes("tram")) {
    kalevaScore += 3;
    hervantaScore += 3;
  }

  if (selected.includes("quiet") || text.includes("quiet")) {
    hervantaScore += 3;
    kalevaScore += 1;
  }

  if (selected.includes("new") || text.includes("new")) {
    hervantaScore += 4;
  }

  if (selected.includes("bright") || text.includes("bright")) {
    kalevaScore += 3;
    hervantaScore += 2;
  }

  if (selected.includes("parks") || text.includes("park")) {
    kalevaScore += 3;
    hervantaScore += 2;
  }

  if (
    selected.includes("lowprice") ||
    text.includes("cheap") ||
    text.includes("lower price")
  ) {
    kalevaScore += 4;
  }

  resultBox.style.display = "block";

  if (hervantaScore > kalevaScore) {
    resultBox.innerHTML = `
      <div class="property-card">
        <img src="images/hervantajarvi-main.jpg" class="property-img">

        <div class="property-content">
          <h3>New Apartment in Hervantajärvi</h3>
          <p class="location">Kaakamonkaari 6 A 34, 33720 Tampere</p>
          <p class="price">191 350 €</p>

          <div class="property-meta">
            <span>🛏 2 Rooms</span>
            <span>🛁 1</span>
            <span>📐 44.5 m²</span>
            <span>🏢 Floor 4 / 4</span>
          </div>

          <div class="property-tags">
            <span>New build</span>
            <span>Glazed balcony</span>
            <span>Energy class B2018</span>
            <span>Near tram stop</span>
            <span>Quiet courtyard</span>
          </div>

          <p class="property-desc">
            Recommended because it matches your preferences for a new, quiet and family-friendly area near tram access.
          </p>

          <div class="property-buttons">
            <button onclick="window.location.href='analysis.html'">Full Analysis</button>
          </div>
        </div>
      </div>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="property-card">
        <img src="images/sammonkatu-main.jpg" class="property-img">

        <div class="property-content">
          <h3>Bright Apartment in Kaleva</h3>
          <p class="location">Sammonkatu 29-31 B, 33540 Tampere</p>
          <p class="price">149 800 €</p>

          <div class="property-meta">
            <span>🛏 2 Rooms</span>
            <span>🛁 1</span>
            <span>📐 53.1 m²</span>
            <span>🏢 Floor 5 / 6</span>
          </div>

          <div class="property-tags">
            <span>Glazed balcony</span>
            <span>Elevator</span>
            <span>Near tram stop</span>
            <span>Schools nearby</span>
            <span>Parks nearby</span>
          </div>

          <p class="property-desc">
            Recommended because it is close to schools, daycare, tram/bus stops, parks, swimming hall, services, and the city centre.
          </p>

          <div class="property-buttons">
            <button onclick="window.location.href='kaleva-analysis.html'">Full Analysis</button>
          </div>
        </div>
      </div>
    `;
  }

  resultBox.scrollIntoView({ behavior: "smooth" });
}

function searchLocation() {
  const locationInput = document.getElementById("locationInput");
  const resultBox = document.getElementById("searchResults");

  if (!locationInput || !resultBox) {
    return;
  }

  const input = locationInput.value.toLowerCase();
  const homeType = document.getElementById("homeType") ? document.getElementById("homeType").value : "";

  let result = "";

  if (input.includes("hervanta") || input.includes("hervantajärvi") || input.includes("33720")) {
    result = `
      <div class="property-card">
        <img src="images/hervantajarvi-main.jpg" class="property-img">

        <div class="property-content">
          <h3>New Apartment in Hervantajärvi</h3>
          <p class="location">Kaakamonkaari 6 A 34, 33720 Tampere</p>
          <p class="price">191 350 €</p>

          <div class="property-meta">
            <span>🛏 2 Rooms</span>
            <span>📐 44.5 m²</span>
            <span>🏢 Floor 4 / 4</span>
          </div>

          <div class="property-tags">
            <span>New build</span>
            <span>Glazed balcony</span>
            <span>Near tram stop</span>
            <span>Quiet area</span>
          </div>

          <div class="property-buttons">
            <button onclick="goToArea()">View Neighbourhood</button>
            <button onclick="goToAnalysis()">Full Analysis</button>
          </div>
        </div>
      </div>
    `;
  }

  else if (input.includes("kaleva") || input.includes("sammonkatu") || input.includes("33540")) {
    result = `
      <div class="property-card">
        <img src="images/sammonkatu-main.jpg" class="property-img">

        <div class="property-content">
          <h3>Bright Apartment in Kaleva</h3>
          <p class="location">Sammonkatu 29-31 B, 33540 Tampere</p>
          <p class="price">149 800 €</p>

          <div class="property-meta">
            <span>🛏 2 Rooms</span>
            <span>📐 53.1 m²</span>
            <span>🏢 Floor 5 / 6</span>
          </div>

          <div class="property-tags">
            <span>Glazed balcony</span>
            <span>Elevator</span>
            <span>Near tram stop</span>
            <span>Schools nearby</span>
          </div>

          <div class="property-buttons">
            <button onclick="goToArea()">View Neighbourhood</button>
            <button onclick="window.location.href='kaleva-analysis.html'">Full Analysis</button>
          </div>
        </div>
      </div>
    `;
  }

  else {
    result = `
      <div class="no-result">
        <h3>No exact property found</h3>
        <p>Try searching: Kaleva, Sammonkatu, Hervantajärvi, Hervanta, 33720, or 33540.</p>
      </div>
    `;
  }

  resultBox.innerHTML = result;
  resultBox.scrollIntoView({ behavior: "smooth" });
}

const locations = [
  { name: "Kaleva, Tampere", type: "neighbourhood" },
  { name: "Sammonkatu 29-31 B, Kaleva", type: "street" },
  { name: "33540 Tampere", type: "postal code" },
  { name: "Hervantajärvi, Tampere", type: "neighbourhood" },
  { name: "Kaakamonkaari 6 A 34, Hervantajärvi", type: "street" },
  { name: "33720 Tampere", type: "postal code" },
  { name: "Hervanta, Tampere", type: "neighbourhood" },
  { name: "Tampere city centre", type: "area" }
];
function showSuggestions() {
  const locationInput = document.getElementById("locationInput");
  const box = document.getElementById("suggestionBox");

  if (!locationInput || !box) {
    return;
  }

  const input = locationInput.value.toLowerCase();

  if (input.length === 0) {
    box.style.display = "none";
    return;
  }

  const matches = locations.filter(item =>
    item.name.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    box.innerHTML = `
      <div class="suggestion-item">
        No matching location found
      </div>
    `;
    box.style.display = "block";
    return;
  }

  box.innerHTML = matches.map(item => `
    <div class="suggestion-item" onclick="selectSuggestion(${JSON.stringify(item.name)})">
      <span>${item.name}</span>
      <span class="suggestion-type">${item.type}</span>
    </div>
  `).join("");

  box.style.display = "block";
}

function selectSuggestion(value) {
  const locationInput = document.getElementById("locationInput");
  const suggestionBox = document.getElementById("suggestionBox");

  if (locationInput) {
    locationInput.value = value;
  }

  if (suggestionBox) {
    suggestionBox.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("locationInput");

  if (input) {
    input.setAttribute("autocomplete", "off");
    input.setAttribute("name", "homeexplorer-location-" + Date.now());
  }
});

function startARScan() {
  const page = document.getElementById("arPage");
  const scanningBox = document.getElementById("scanningBox");
  const arResults = document.getElementById("arResults");
  const scanHeaderScanning = document.getElementById("scanHeaderScanning");
  const scanHeaderResult = document.getElementById("scanHeaderResult");

  if (!page || !scanningBox || !arResults || !scanHeaderScanning || !scanHeaderResult) {
    return;
  }

  page.classList.remove("revealed");

  scanningBox.style.display = "block";
  arResults.style.display = "none";

  scanHeaderScanning.style.display = "flex";
  scanHeaderResult.style.display = "none";

  setTimeout(() => {
    page.classList.add("revealed");

    scanningBox.style.display = "none";
    arResults.style.display = "block";

    scanHeaderScanning.style.display = "none";
    scanHeaderResult.style.display = "flex";
  }, 3000);
}

function toggleSafetyBreakdown() {
  const box = document.getElementById("safetyBreakdown");

  if (!box) {
    return;
  }

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("arPage")) {
    startARScan();
  }
});