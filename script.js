
const phoneInputField = document.getElementById("phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});



let firstnameInput = document.getElementById("firstnameInput")
let lastnameInput = document.getElementById("lastnameInput")
let emailInput = document.getElementById("emailInput")


const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




registrationButton.addEventListener("click", function (e) {

  e.preventDefault()
  

  if (firstnameInput.value.length < 3) {
    document.querySelector(".firstnameSpan").style.display = "block"
    document.querySelector(".firstnameSpan").style.color = "red"
    firstnameInput.style.border = " 1px solid red"
  }

  if (firstnameInput.value.length >= 3) {
    document.querySelector(".firstnameSpan").style.display = "none"
    firstnameInput.style.border = " white"

  }

  if (lastnameInput.value.length < 3) {
    document.querySelector(".lastnameSpan").style.display = "block"
    document.querySelector(".lastnameSpan").style.color = "red"
    lastnameInput.style.border = " 1px solid red"
  }

  if (lastnameInput.value.length >= 3) {
    document.querySelector(".lastnameSpan").style.display = "none"
    lastnameInput.style.border = "white"
  }

  if (!regex.test(emailInput.value)) {
    document.querySelector(".emailSpan").style.display = "block"
    document.querySelector(".emailSpan").style.color = "red"
    emailInput.style.border = "1px solid red"
  }

  if (regex.test(emailInput)) {
    document.querySelector(".emailSpan").style.display = "none"
    emailInput.style.border = "white"
  }

  if (phone.value.length < 3) {
    phone.style.border = "1px solid red"
  }
  if (phone.value.length >= 3) {
    phone.style.border = "white"
  }

  if (dateInput.value.length < 2) {
    dateInput.style.border = "1px solid red"
  }

  if (dateInput.value.length > 2) {
    dateInput.style.border = "white"
  }

})
