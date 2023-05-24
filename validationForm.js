const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regExCountry = /^[a-zA-Z\s]*$/;
const regExZipCode = /^\d{4,}$/;
const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

const emailInputField = document.querySelector('input[name="email"]')
const countryInputField = document.querySelector('input[name="country"]')
const zipInputField = document.querySelector('input[name="zip"]')
const passwordInputField = document.querySelector('input[name="password"]')
const confirmPasswordInputField = document.querySelector('input[name="passwordConfirm"]')

const emailHint = document.getElementById("email")
const countryHint = document.getElementById("country")
const zipHint = document.getElementById("zip")
const passwordHint = document.getElementById("password")
const passwordConfirmHint = document.getElementById("passwordConfirm")

const formBtn = document.getElementById("addForm")

formBtn.addEventListener("click", (event) => {
    for (let field in formValidationState) {
        if (!formValidationState[field]) {
            event.preventDefault()
            alert(`Please correct the ${field} before submitting`)
            return
        }
    }
    alert("High Five! Your form have been submitted!")
})

emailInputField.addEventListener('input', checkValidState);
countryInputField.addEventListener('input', checkValidState);
zipInputField.addEventListener('input', checkValidState);
passwordInputField.addEventListener('input', checkValidState);
confirmPasswordInputField.addEventListener('input', checkValidState);

let formValidationState = {
    email: false,
    country: false,
    zip: false,
    password: false,
    passwordConfirm: false,
};

function checkValidState(event) {
    let target = event.target
    if (target.name == 'email') {
        if (regExEmail.test((target.value))) {
            switchValidState(target, true)
            emailHint.style.display = "none"
            formValidationState.email = true
        } else {
            switchValidState(target, false)
            emailHint.style.display = "block"
            formValidationState.email = false
        }
    }
    if (target.name == 'country') {
        if (regExCountry.test((target.value))) {
            switchValidState(target, true)
            countryHint.style.display = "none"
            formValidationState.country = true
        } else {
            switchValidState(target, false)
            countryHint.style.display = "block"
            formValidationState.country = false
        }
    }
    if (target.name == 'zip') {
        if (regExZipCode.test((target.value))) {
            switchValidState(target, true)
            zipHint.style.display = "none"
            formValidationState.zip = true
        } else {
            switchValidState(target, false)
            zipHint.style.display = "block"
            formValidationState.zip = false
        }
    }
    if (target.name == 'password') {
        if (regExPassword.test((target.value))) {
            switchValidState(target, true)
            passwordHint.style.display = "none"
            formValidationState.password = true
        } else {
            switchValidState(target, false)
            passwordHint.style.display = "block"
            formValidationState.password = false
        }
    }
    if (target.name == 'passwordConfirm') {
        const passwordField = document.querySelector('input[name="password"]');
        if (passwordField && passwordField.value === target.value) {
            switchValidState(target, true)
            passwordConfirmHint.style.display = "none"
            formValidationState.passwordConfirm = true
        } else {
            switchValidState(target, false)
            passwordConfirmHint.style.display = "block"
            formValidationState.passwordConfirm = false
        }
    }
}

function switchValidState(target, boolean) {
    if (boolean) {
        target.classList.add('valid')
        target.classList.remove('invalid')
    } else if (!boolean) {
        target.classList.add('invalid')
        target.classList.remove('valid')
    }
}
