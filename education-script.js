AOS.init({
  duration: 1000,
  offset: 120,
  once: true
});

// Optional: unlock scrolling after fade-in
window.onload = () => {
  setTimeout(() => {
    document.body.style.overflow = 'auto';
  }, 1500);
};
function toggleMenu() {
    const nav = document.getElementById("navButtons");
    nav.classList.toggle("show-menu");
  }
