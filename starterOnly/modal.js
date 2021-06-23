function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const buttonSubmit = document.getElementById('buttonSubmit');

//Recuperation de chaque champs du formulaire
const champPrenom = document.getElementById('first');
const champNom = document.getElementById('last');
const champEmail = document.getElementById('email');
const champNaissance = document.getElementById('birthdate');
const champTournois = document.getElementById('quantity');
const checkboxCondition = document.getElementById('checkbox1');

//Recuperation de chaque messages d'erreur des champs du formulaire
const erreurPrenom = document.getElementById('erreurPrenom');
const erreurNom = document.getElementById('erreurNom');
const erreurEmail = document.getElementById('erreurEmail');
const erreurNaissance = document.getElementById('erreurNaissance');
const erreurTournois = document.getElementById('erreurTournois');
const erreurCondition = document.getElementById('erreurCondition');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalClose.forEach((btn) => btn.addEventListener("click", CloseModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function CloseModal() {
  modalbg.style.display = "none";
}


// script pour la validation du formulaire

// création des règles regex
const regex_formulaire = {
  prenom: /^[A-Z-]{2,100}$/i,
  nom: /^[A-Z-]{2,100}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]+){2,4}$/i,
}

// Verification des champs et affichage d'une erreur si invalide
buttonSubmit.addEventListener('click', function(e) {
  let i = true;
  if (regex_formulaire.prenom.test(champPrenom.value) === false) {
    e.preventDefault;
    erreurPrenom.style.display = "block";
    i = false;
  } else {
    erreurPrenom.style.display = "none";
  }

  if (regex_formulaire.nom.test(champNom.value) === false) {
    e.preventDefault;
    erreurNom.style.display = "block";
    i = false;
  } else {
    erreurNom.style.display = "none";
  }

  if (regex_formulaire.email.test(champEmail.value) === false) {
    e.preventDefault;
    erreurEmail.style.display = "block";
    i = false;
  } else {
    erreurEmail.style.display = "none";
  }

  if (champNaissance.value.length === 0) {
    e.preventDefault;
    erreurNaissance.style.display = "block";
    i = false;
  } else {
    erreurNaissance.style.display = "none";
  }

  if (champTournois.value < 1) {
    e.preventDefault;
    erreurTournois.style.display = "block";
    i = false;
  } else {
    erreurTournois.style.display = "none";
  }

  if (checkboxCondition.checked === false) {
    e.preventDefault;
    erreurCondition.style.display = "block";
    i = false;
  } else {
    erreurCondition.style.display = "none";
  }

  // Si tous les champs sont valide, un message de validation s'affiche
  if (i === true) {
    window.alert("Merci ! Votre réservation a été reçue.");
  }
})