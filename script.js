const words = ["WEB DESIGNER", "DEVELOPER", "APP MAKER"];
const element = document.getElementById("typewriter-text");
const speed = 100;
const delayBetweenWords = 2000;
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    element.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, speed);
  } else {
    setTimeout(eraseWord, delayBetweenWords);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    element.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, speed / 2);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, speed);
  }
}

window.onload = () => {
  typeWord();
  AOS.init();
};
function toggleMenu() {
    const nav = document.getElementById("navButtons");
    nav.classList.toggle("show-menu");
  }


