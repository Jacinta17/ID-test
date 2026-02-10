/* ===== BETTER SCROLL POP-UP (APPEARS + DISAPPEARS) ===== */

const revealEls = document.querySelectorAll(
    ".reveal, .reveal-scale, .pop-on-scroll"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");   // pop in
            } else {
                entry.target.classList.remove("active"); // pop back out when scrolling away
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealEls.forEach(el => observer.observe(el));

// JS remains the same as it correctly selects '.carousel-item'
const items = document.querySelectorAll('.carousel-item');
const numItems = items.length;
const rotateYInterval = 360 / numItems;
const radius = 350; /* Adjust this value to change circle size */

items.forEach((item, index) => {
    const angle = rotateYInterval * index;
    item.style.transform =
        `rotateY(${angle}deg) translateZ(${radius}px)`;
});


/* POPUP */
const popup = document.getElementById("consultPopup");
const closePopup = document.getElementById("closePopup");

window.addEventListener("load", () => {
    setTimeout(() => popup?.classList.add("active"), 600);
});

closePopup?.addEventListener("click", () => {
    popup.classList.remove("active");
});

/* ------------------- HAMBURGER NAV ------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
