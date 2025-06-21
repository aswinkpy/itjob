AOS.init({
  duration: 1000,
  offset: 120,
  once: true
});

function showSuccess(event) {
  event.preventDefault(); // Prevent form submission

  // Clear the form
  const form = event.target;
  form.reset();

  // Show the success popup
  const popup = document.getElementById("success-popup");
  popup.style.display = "flex";

  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}
