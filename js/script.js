// NAVBAR BURGER

const nav = document.getElementById("nav");
const menuBurger = document.getElementById("burger");

menuBurger.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBurger.classList.toggle("active");
});

// SOUND BIKE

// Sélection de l'élément HTML avec l'ID "scooter"
const scooter = document.getElementById("scooter");

// Création d'un nouvel élément audio avec le fichier audio spécifié
const bruitScooter = new Audio("https://lasonotheque.org/UPLOAD/mp3/0603.mp3");

// Ajout d'un écouteur d'événements pour le survol de la souris sur l'élément "scooter"
scooter.addEventListener("mouseenter", () => {
  // Lecture du fichier audio lorsque la souris survole l'élément "scooter"
  bruitScooter.play();
});

// Sélection de l'élément HTML avec l'ID "scooter" (peut-être une erreur, devrait être un autre élément, ex: "rotate")
const rotate = document.getElementById("scooter");

// Ajout d'un écouteur d'événements pour le survol de la souris sur l'élément "rotate"
rotate.addEventListener("mouseenter", function () {
  // Ajout de la classe "animated" à l'élément "rotate" lors du survol de la souris
  this.classList.add("animated");
});

// Ajout d'un écouteur d'événements pour la fin de l'animation sur l'élément "rotate"
rotate.addEventListener("animationend", function () {
  // Suppression de la classe "animated" de l'élément "rotate" lorsque l'animation se termine
  this.classList.remove("animated");
});
