AOS.init({
  duration: 1000,
  offset: 120,
  once: true
});

function showSuccess(event) {
  event.preventDefault(); // prevent actual form submission
  const popup = document.getElementById("success-popup");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}
