const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".fa-close");

// Ensure these elements exist in your HTML
if (menuIcon && backdrop && navLinks && closeIcon) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
    backdrop.classList.add("active");
  });

  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
  });

  backdrop.addEventListener("click", () => {
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
  });
} else {
  console.error("One or more elements not found");
}
