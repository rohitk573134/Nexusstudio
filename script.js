const packages = [
  { id: 1, type: "couple", name: "Romantic Andaman Escape", days: "5D/4N", price: "₹42,000" },
  { id: 2, type: "family", name: "Family Comfort Tour", days: "6D/5N", price: "₹58,000" },
  { id: 3, type: "budget", name: "Budget Island Explorer", days: "4D/3N", price: "₹28,000" },
  { id: 4, type: "couple", name: "Luxury Honeymoon Special", days: "6D/5N", price: "₹86,000" },
];

const grid = document.getElementById("packageGrid");
const filter = document.getElementById("typeFilter");

function renderPackages(type = "all") {
  const list = type === "all" ? packages : packages.filter((p) => p.type === type);
  grid.innerHTML = list.map((p) => `
    <article class="card">
      <h3>${p.name}</h3>
      <p>${p.days} · ${p.price}</p>
      <a class="btn primary" href="#planner">Check Availability</a>
    </article>`).join("");
}
filter?.addEventListener("change", (e) => renderPackages(e.target.value));
renderPackages();

const plannerSteps = [
  "Step 1: Select travel month and flexibility",
  "Step 2: Choose traveler type and group size",
  "Step 3: Choose budget range",
  "Step 4: Add interests (beaches, scuba, family activities)",
  "Step 5: Enter contact and preferred callback time",
];
let step = 0;
const stepEl = document.getElementById("plannerStep");
const prev = document.getElementById("prevStep");
const next = document.getElementById("nextStep");

function drawStep() {
  stepEl.textContent = plannerSteps[step];
  prev.disabled = step === 0;
  next.textContent = step === plannerSteps.length - 1 ? "Submit" : "Next";
}
prev?.addEventListener("click", () => { if (step > 0) { step--; drawStep(); } });
next?.addEventListener("click", () => {
  if (step < plannerSteps.length - 1) {
    step++;
    drawStep();
  } else {
    stepEl.textContent = "Thanks! Our travel expert will contact you shortly.";
    next.disabled = true;
  }
});
drawStep();

document.getElementById("quickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("quickMsg").textContent = "Submitted! We will call you shortly.";
});
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("contactMsg").textContent = "Inquiry received. Team will respond within 15 minutes.";
});
