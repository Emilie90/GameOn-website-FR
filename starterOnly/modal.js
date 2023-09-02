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
const closeBtn = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const form = document.getElementById("form");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioBtn = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.getElementById("checkbox1");
const firstData = document.getElementById("firstData");
const lastData = document.getElementById("lastData");
const emailData = document.getElementById("emailData");
const birthData = document.getElementById("birthData");
const quantityData = document.getElementById("quantityData");
const radioData = document.getElementById("radioData");
const checkboxData = document.getElementById("checkboxData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

//first name validation
firstName.addEventListener("change", function () {
  validFirstName(this);
});
function validFirstName(inputFirstName) {
  if (inputFirstName.value.length < 2 || inputFirstName.value === "") {
    firstData.setAttribute(
      "data-error",
      "veuillez entrer au moins 2 caractères pour le prénom"
    );
    firstData.setAttribute("data-error-visible", true);
    return false;
  } else {
    firstData.setAttribute("data-error-visible", false);
    return true;
  }
}
//last name validation
lastName.addEventListener("change", function () {
  validLastName(this);
});
function validLastName(inputLastName) {
  if (inputLastName.value.length < 2 || inputLastName.value === "") {
    lastData.setAttribute(
      "data-error",
      "veuillez entrer au moins 2 caractères pour le nom"
    );
    lastData.setAttribute("data-error-visible", true);
    return false;
  } else {
    lastData.setAttribute("data-error-visible", false);
    return true;
  }
}

//email validation
email.addEventListener("change", function () {
  validerEmail(this);
});
function validerEmail(inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  if (!emailRegExp.test(inputEmail.value)) {
    emailData.setAttribute(
      "data-error",
      "L'adresse électronique n'est pas valide"
    );
    emailData.setAttribute("data-error-visible", true);
    return false;
  } else {
    emailData.setAttribute("data-error-visible", false);
    return true;
  }
}

// birthdate validation
birthdate.addEventListener("change", function () {
  validBirthdate(this);
});

// calcul age

function getAge(date) {
  var diff = Date.now() - date.getTime();
  var age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}

function validBirthdate(inputBirthdate) {
  var age = getAge(new Date(inputBirthdate.value));
  if (inputBirthdate.value === "") {
    birthData.setAttribute(
      "data-error",
      "Veuillez entrer une date de naissance valide."
    );
    birthData.setAttribute("data-error-visible", true);
    return false;
  } else if (age < 18) {
    birthData.setAttribute("data-error", "Vous devez avoir 18 ans.");
    birthData.setAttribute("data-error-visible", true);
  } else {
    birthData.setAttribute("data-error-visible", false);
    return true;
  }
}

//quantity validation
quantity.addEventListener("change", function () {
  validQuantity(this);
});
function validQuantity(inputQuantity) {
  if (isNaN(inputQuantity.value) == true || inputQuantity.value === " ") {
    console.log(inputQuantity.value);
    quantityData.setAttribute("data-error", "Veuillez entrer un chiffre.");
    quantityData.setAttribute("data-error-visible", true);
  } else {
    quantityData.setAttribute("data-error-visible", false);
    return true;
  }
}

// Un bouton radio est sélectionné
function validLocation() {
  var selected = false;
  for (var radio of radioBtn) {
    if (radio.type === "radio" && radio.checked) {
      selected = true;
      radioData.setAttribute("data-error-visible", false);
      return true;
    }
  }

  if (!selected) {
    radioData.setAttribute("data-error", "Veuillez choisir un lieu");
    radioData.setAttribute("data-error-visible", true);
    return false;
  }
}

radioBtn.forEach((selectedRadio) => {
  selectedRadio.addEventListener("change", function () {
    validLocation();
  });
});

checkbox1.addEventListener("change", function () {
  validCheckbox1();
});

function validCheckbox1() {
  if (checkbox1.checked) {
    checkboxData.setAttribute("data-error-visible", false);
    return true;
  } else {
    checkboxData.setAttribute("data-error", "Veuillez accepter les conditions");
    checkboxData.setAttribute("data-error-visible", true);
    return false;
  }
}

//submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
