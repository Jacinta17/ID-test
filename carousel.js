document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const container = document.querySelector(".carousel-container");

    if (!carousel || items.length === 0) {
        console.log("Carousel not found — check class names.");
        return;
    }

    /* ========== STEP 1: PLACE ITEMS IN 3D CIRCLE ========== */

    const numItems = items.length;
    const rotateYInterval = 360 / numItems;
    const radius = 350;   // DO NOT CHANGE (keeps your sizing)

    items.forEach((item, index) => {
        const angle = rotateYInterval * index;
        item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });

    /* ========== STEP 2: DRAG + AUTO SPIN CONTROL ========== */

    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;
    let lastRotation = 0;

    /* Start drag */
    function startDrag(x) {
        isDragging = true;
        startX = x;
        carousel.style.animationPlayState = "paused";
    }

    /* Move drag */
    function moveDrag(x) {
        if (!isDragging) return;

        const delta = x - startX;
        currentRotation = lastRotation + delta * 0.4;
        carousel.style.transform = `rotateY(${currentRotation}deg)`;
    }

    /* End drag → resume auto spin */
    function endDrag() {
        isDragging = false;
        lastRotation = currentRotation;

        carousel.style.animation = "none";
        carousel.style.transform = `rotateY(${currentRotation}deg)`;

        setTimeout(() => {
            carousel.style.animation = "spin 35s infinite linear";
        }, 10);
    }

    /* ===== DESKTOP (MOUSE) ===== */
    container.addEventListener("mousedown", (e) => startDrag(e.clientX));
    container.addEventListener("mousemove", (e) => moveDrag(e.clientX));
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", () => { if (isDragging) endDrag(); });

    /* ===== MOBILE (TOUCH) ===== */
    container.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX));
    container.addEventListener("touchmove", (e) => moveDrag(e.touches[0].clientX));
    container.addEventListener("touchend", endDrag);

});
