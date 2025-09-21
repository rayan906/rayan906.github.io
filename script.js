
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header p");
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  header.textContent = greeting + " | Aspiring Software Developer";
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", function() {
    alert("Thank you for visiting my portfolio! You can reach me at your.email@example.com");
  });
});
const text = "Computer Science Student | Aspiring Developer";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector("header p").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
