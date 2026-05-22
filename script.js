const packages = [
  {
    id: 1,
    type: "couple",
    tag: "Honeymoon",
    name: "Romantic Andaman Escape",
    duration: "5D/4N",
    price: "₹42,000",
    points: "Private cab · Beach sunset dinner · Premium stay",
  },
  {
    id: 2,
    type: "family",
    tag: "Family",
    name: "Family Comfort Andaman",
    duration: "6D/5N",
    price: "₹58,000",
    points: "Kid-friendly plan · Comfortable transfers · Safe pacing",
  },
  {
    id: 3,
    type: "budget",
    tag: "Budget",
    name: "Budget Island Explorer",
    duration: "4D/3N",
    price: "₹28,000",
    points: "Best-value hotels · Shared ferry support · Essential highlights",
  },
  {
    id: 4,
    type: "couple",
    tag: "Luxury",
    name: "Luxury Honeymoon Signature",
    duration: "6D/5N",
    price: "₹86,000",
    points: "Luxury stays · Curated experiences · Dedicated support",
  },
];

const grid = document.getElementById("packageGrid");
const filter = document.getElementById("typeFilter");

function renderPackages(type = "all") {
  const list = type === "all" ? packages : packages.filter((pkg) => pkg.type === type);
  grid.innerHTML = list
    .map(
      (pkg) => `
      <article class="package-card">
        <span class="package-tag">${pkg.tag}</span>
        <h3>${pkg.name}</h3>
        <p>${pkg.duration} · <span class="package-price">${pkg.price}</span></p>
        <p>${pkg.points}</p>
        <a class="btn btn-primary" href="#planner">Check Availability</a>
      </article>
    `
    )
    .join("");
}

filter?.addEventListener("change", (event) => renderPackages(event.target.value));
renderPackages();

const steps = [
  "Choose your travel month and date flexibility.",
  "Select traveler type and group size.",
  "Set your expected budget range.",
  "Pick interests: beaches, scuba, family comfort, adventure.",
  "Add contact details and preferred callback timing.",
];

let step = 0;
const stepEl = document.getElementById("plannerStep");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevStep");
const nextBtn = document.getElementById("nextStep");

function drawStep() {
  const total = steps.length;
  stepEl.textContent = steps[step];
  progressText.textContent = `Step ${step + 1} of ${total}`;
  progressBar.style.width = `${((step + 1) / total) * 100}%`;
  prevBtn.disabled = step === 0;
  nextBtn.textContent = step === total - 1 ? "Submit" : "Next";
}

prevBtn?.addEventListener("click", () => {
  if (step > 0) {
    step -= 1;
    drawStep();
  }
});

nextBtn?.addEventListener("click", () => {
  if (step < steps.length - 1) {
    step += 1;
    drawStep();
  } else {
    stepEl.textContent = "Thanks! Your planner request is captured. Our expert will contact you shortly.";
    nextBtn.disabled = true;
  }
});

drawStep();

document.getElementById("quickForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("quickMsg").textContent = "Done! We will share your suggested itinerary shortly.";
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("contactMsg").textContent = "Inquiry received! Team will respond within 15 minutes.";
});
