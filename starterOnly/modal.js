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
const formValidation = document.getElementById('form-valid');
const buttonValidation = document.getElementById('buttonValidation');
const form = document.getElementById("formulaire");

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

// fermeture de la modal de validation
buttonValidation.addEventListener("click", function() {
  form.submit();
})


  // script pour la validation du formulaire

// création des règles regex
const regex_formulaire = {
  prenom: /^[A-Z-]{2,100}$/i,
  nom: /^[A-Z-]{2,100}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]+){2,4}$/i,
}

// Definition de la date maximal du champ date de naissance a la date d'aujourdhui
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if ( dd < 10 ) {
  dd = '0' + dd
} 
if ( mm < 10 ) {
  mm = '0' + mm
} 
today = yyyy + '-' + mm + '-' + dd;
champNaissance.setAttribute("max", today);

//fonction template pour ecouter les changements sur les champs prenom, nom et email
function changeListener(champ, regex, erreur) {
  champ.addEventListener('change', function() {
    if (regex.test(champ.value) === false) {
      champ.parentElement.setAttribute('data-error-visible','true');
      erreur.style.display = "block";
    } else {
      champ.parentElement.setAttribute('data-error-visible','false');
      erreur.style.display = "none";
    }
  })
}

// Verifications des champs directement à la perte de focus
changeListener(champPrenom, regex_formulaire.prenom, erreurPrenom);
changeListener(champNom, regex_formulaire.nom, erreurNom);
changeListener(champEmail, regex_formulaire.email, erreurEmail);

champNaissance.addEventListener('change', function() {
  if (champNaissance.value.length === 0) {
    champNaissance.parentElement.setAttribute('data-error-visible','true');
    erreurNaissance.style.display = "block";
  } else {
    champNaissance.parentElement.setAttribute('data-error-visible','false');
    erreurNaissance.style.display = "none";
  }
})

champTournois.addEventListener('change', function() {
  if (champTournois.value.length === 0) {
    champTournois.parentElement.setAttribute('data-error-visible','true');
    erreurTournois.style.display = "block";
  } else {
    champTournois.parentElement.setAttribute('data-error-visible','false');
    erreurTournois.style.display = "none";
  }
})


// au clic, verification des champs un par un et affichage d'une erreur si invalide, puis validation 
buttonSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  let i = true;

  // fonction template pour verifier les champs prenom, nom et email
  function clickListener(champ, regex, erreur) {
    if (regex.test(champ.value) === false) {
      e.preventDefault();
      champ.parentElement.setAttribute('data-error-visible','true');
      erreur.style.display = "block";
      i = false;
    } else {
      e.preventDefault();
      champ.parentElement.setAttribute('data-error-visible','false');
      erreur.style.display = "none";
    }
  }

  clickListener(champPrenom, regex_formulaire.prenom, erreurPrenom);
  clickListener(champNom, regex_formulaire.nom, erreurNom);
  clickListener(champEmail, regex_formulaire.email, erreurEmail);

  if (champNaissance.value.length === 0) {
    e.preventDefault();
    champNaissance.parentElement.setAttribute('data-error-visible','true');
    erreurNaissance.style.display = "block";
    i = false;
  } else {
    e.preventDefault();
    champNaissance.parentElement.setAttribute('data-error-visible','false');
    erreurNaissance.style.display = "none";
  }

  if (champTournois.value.length === 0) {
    e.preventDefault();
    champTournois.parentElement.setAttribute('data-error-visible','true');
    erreurTournois.style.display = "block";
    i = false;
  } else {
    e.preventDefault();
    champTournois.parentElement.setAttribute('data-error-visible','false');
    erreurTournois.style.display = "none";
  }

  if (checkboxCondition.checked === false) {
    e.preventDefault();
    erreurCondition.style.display = "block";
    i = false;
  } else {
    e.preventDefault();
    erreurCondition.style.display = "none";
  }

  // Si tous les champs sont valide, un message de validation s'affiche
  if (i === true) {
    e.preventDefault();
    formValidation.style.display = "block";
  }
})