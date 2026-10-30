
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuBtn.textContent =
    navLinks.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const roles = [
  "Aspiring Web Developer",
  "Python Enthusiast",
  "Frontend Developer"
];

let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  document.getElementById("role").textContent =
    roles[roleIndex];
}, 2500);

document.getElementById("resumeBtn").addEventListener("click", () => {
  const resume = `MATHAVAN M
B.E. Computer Science and Engineering

Email: mathavanm638583@gmail.com
GitHub: https://github.com/mathavanm2302

EDUCATION
B.E. Computer Science and Engineering
Nehru Institute of Engineering and Technology

SKILLS
HTML, CSS, JavaScript, Python, OpenCV, Git and GitHub

PROJECTS
Image Gallery
TouchLess AI
Calculator Web Application
Personal Portfolio Website

Update this sample with your accurate details.`;

  const blob = new Blob([resume], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Mathavan_Resume.txt";
  link.click();

  URL.revokeObjectURL(url);
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );

  document.getElementById("status").textContent =
    "Opening your email application...";

  window.location.href =
    `mailto:mathavanm638583@gmail.com?subject=${subject}&body=${body}`;
});
