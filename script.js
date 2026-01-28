/* ================= POPUP ================= */
const popup = document.getElementById("consultPopup");
const closePopup = document.getElementById("closePopup");

window.addEventListener("load", () => {
    setTimeout(() => popup.classList.add("active"), 600);
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});

/* ================= HAMBURGER ================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ================= SCROLL REVEAL ================= */
const revealEls = document.querySelectorAll(".reveal, .reveal-scale");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealEls.forEach(el => observer.observe(el));
