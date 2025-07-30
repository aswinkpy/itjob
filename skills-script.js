document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000, once: true });

  document.querySelectorAll(".skill").forEach(skill => {
    const circle = skill.querySelector(".outer-circle");
    const percentText = skill.querySelector(".percent-text");
    const target = parseInt(skill.getAttribute("data-percent"));
    let current = 0;

    const colors = ["#00ffff", "#00ccff", "#0099ff", "#33ccff", "#66ffff"];

    const animate = () => {
      if (current <= target) {
        percentText.textContent = current + "%";
        const colorIndex = Math.floor(current / (100 / colors.length));
        const activeColor = colors[colorIndex] || colors[colors.length - 1];
        circle.style.background = `conic-gradient(${activeColor} ${current * 3.6}deg, #222 ${current * 3.6}deg)`;
        current++;
        setTimeout(animate, 10);
      }
    };

    skill.addEventListener("mouseenter", animate, { once: true });
  });
});
function toggleMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    navButtons.classList.toggle('show-menu');
  }
