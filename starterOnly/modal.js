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
const successMessage = document.getElementById("successMessage");
const btnThanks = document.getElementById("btnThanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  if ((form.className = "hidden")) {
    form.className = "visible";
    successMessage.className = "hidden";
  }
  form.reset();
}

//Listen event on first name input
firstName.addEventListener("change", function () {
  validFirstName();
});

//Check if First Name is correct (at least 2 letters)
function validFirstName() {
  if (!firstName.validity.valid) {
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
//Listen event on last name input
lastName.addEventListener("change", function () {
  validLastName();
});

//Check if Last Name is correct (at least 2 letters)
function validLastName() {
  if (!lastName.validity.valid) {
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

//Listen event on email input
email.addEventListener("change", function () {
  validerEmail(this);
});

//Check if email is correct (with RegExp)
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

//Listen event on birthdate input
birthdate.addEventListener("change", function () {
  validBirthdate(this);
});

// calcul age

function getAge(date) {
  var diff = Date.now() - date.getTime();
  var age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}
//check if user's birthdate is correct and if user is over 18
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
    return false;
  } else {
    birthData.setAttribute("data-error-visible", false);
    return true;
  }
}

//Listen event on quantity input
quantity.addEventListener("change", function () {
  validQuantity(this);
});

//check if the input is not empty
function validQuantity(inputQuantity) {
  if (inputQuantity.value === "") {
    quantityData.setAttribute("data-error", "Veuillez entrer un chiffre.");
    quantityData.setAttribute("data-error-visible", true);
    return false;
  } else {
    quantityData.setAttribute("data-error-visible", false);
    return true;
  }
}

//Listen event on location input

radioBtn.forEach((selectedRadio) => {
  selectedRadio.addEventListener("change", function () {
    validLocation(this);
  });
});

//check if a radio button is selected
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
//Listen event on Term of use checkbox
checkbox1.addEventListener("change", function () {
  validCheckbox1(this);
});

//check if term of use's checkbox is checked
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

//succes message display === all validation OK
function succesMessage() {
  form.className = "hidden";
  successMessage.className = "visible";
}
//close modal on success message's button
btnThanks.addEventListener("click", closeModal);

//submit form with validation of all input
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    validLastName(form.lastName) &&
    validFirstName(form.firstName) &&
    validerEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    validLocation(form.radioBtn) &&
    validCheckbox1(form.checkbox1)
  ) {
    console.log("Ok");
    succesMessage();
    return true;
  } else {
    console.log("not ok");
    return false;
  }
});
