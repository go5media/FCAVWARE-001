// Mobile nav toggle
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple contact form validation + mailto fallback
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

function setError(fieldId, msg) {
  const el = document.querySelector(`[data-error-for="${fieldId}"]`);
  if (el) el.textContent = msg || "";
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const region = document.getElementById("region").value;
    const club = document.getElementById("club").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const postcode = document.getElementById("postcode").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset errors
    ["region", "club", "name", "email", "message"].forEach(id => setError(id, ""));

    let ok = true;
    if (!region) { setError("region", "Please choose a region."); ok = false; }
    if (!club) { setError("club", "Please enter your club name."); ok = false; }
    if (!name) { setError("name", "Please enter your name."); ok = false; }
    if (!email || !isEmail(email)) { setError("email", "Please enter a valid email address."); ok = false; }
    if (!message) { setError("message", "Please enter a short message."); ok = false; }

    if (!ok) {
      if (statusEl) statusEl.textContent = "Please fix the highlighted fields.";
      return;
    }

    const to =
      region === "surrey"
        ? "info@surrey.fcware.uk"
        : "info@london.fcware.uk";

    const regionLabel = region === "surrey" ? "Surrey" : "London";

    const subject = encodeURIComponent(`FC Aware AV enquiry — ${club} (${regionLabel})`);
    const body = encodeURIComponent(
      `Region: ${regionLabel}\n` +
      `Club: ${club}\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Postcode: ${postcode || "(not provided)"}\n\n` +
      `Message:\n${message}\n`
    );

    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    if (statusEl) {
      statusEl.textContent = "Opening your email app… if nothing happens, contact us using the details on the right.";
    }
  });
}
