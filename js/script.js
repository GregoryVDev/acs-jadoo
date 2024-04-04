// Sélectionner l'élément du scooter
const scooter = document.getElementById("scooter");

// Sélectionner l'élément audio
const audio = document.getElementById("audio");

// Ajouter un écouteur d'événements pour le survol de la souris sur l'image du scooter
scooter.addEventListener("mouseenter", () => {
  // Jouer l'audio lorsque la souris survole l'image du scooter
  audio.play();
});

// Optionnel : Mettre en pause l'audio lorsque la souris quitte l'image du scooter
scooter.addEventListener("mouseleave", () => {
  // Mettre en pause l'audio lorsque la souris quitte l'image du scooter
  audio.pause();
  // Optionnellement, vous pouvez également réinitialiser l'audio au début
  audio.currentTime = 0;
});
