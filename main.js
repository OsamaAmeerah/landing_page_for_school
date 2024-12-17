const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//* header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 500,
});

//* about container
ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 200,
});

//* stats container
ScrollReveal().reveal(".stats__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats__card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});

//* blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


//* Slider
const images = [
  "assets/header.jpg",
  "assets/blog-1.jpg",
  "assets/header2.jpg",
];

let currentImageIndex = 0; 
const header = document.querySelector("header");

function updateBackground() {
  header.classList.add("fade-out");
  setTimeout(() => {
    header.style.backgroundImage = `
      linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
      url('${images[currentImageIndex]}')
    `;
    header.classList.remove("fade-out");
  }, 300);
}

let sliderInterval = setInterval(nextImage, 3000);

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateBackground();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateBackground();
}

document.getElementById("nextBtn").addEventListener("click", () => {
  clearInterval(sliderInterval);
  nextImage();
  sliderInterval = setInterval(nextImage, 3000);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  clearInterval(sliderInterval);
  prevImage();
  sliderInterval = setInterval(nextImage, 3000);
});

updateBackground();
