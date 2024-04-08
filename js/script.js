// CARRE ROSE

const cubeRose = document.getElementById("square");
const div1 = document.getElementById("div1");
const pinkSquare = document.getElementById("square2");
const div2 = document.getElementById("div2");
const pinkySquare = document.getElementById("square3");
const div3 = document.getElementById("div3");
const squarePink = document.getElementById("square4");
const div4 = document.getElementById("div4");

function showCube(square) {
  square.classList.remove("rotate2");
  square.classList.add("rotate");
}

function hideCube(square) {
  square.classList.remove("rotate");
  square.classList.add("rotate2");
}

div1.addEventListener("mouseenter", function () {
  showCube(cubeRose);
});
div1.addEventListener("mouseleave", function () {
  hideCube(cubeRose);
});

div2.addEventListener("mouseenter", function () {
  showCube(pinkSquare);
});
div2.addEventListener("mouseleave", function () {
  hideCube(pinkSquare);
});

div3.addEventListener("mouseenter", function () {
  showCube(pinkySquare);
});
div3.addEventListener("mouseleave", function () {
  hideCube(pinkySquare);
});

div4.addEventListener("mouseenter", function () {
  showCube(squarePink);
});
div4.addEventListener("mouseleave", function () {
  hideCube(squarePink);
});

div1.addEventListener("mouseenter", showCube);
div1.addEventListener("mouseleave", hideCube);

div2.addEventListener("mouseenter", showCube);
div2.addEventListener("mouseleave", hideCube);

div3.addEventListener("mouseenter", showCube);
div3.addEventListener("mouseleave", hideCube);

div4.addEventListener("mouseenter", showCube);
div4.addEventListener("mouseleave", hideCube);

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
