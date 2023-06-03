const submitBtn = document.querySelector('.submit-arrow');
const userInput = document.querySelector('input');
const errorText = document.querySelector('.error-text')
const errorIcon = document.querySelector('.error-icon')
const pattern = {
  email: /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{3,8})$/gm
}

function validate(field, regex) {
  if(regex.test(field.value)) {
    field.className = 'valid'
    errorIcon.classList.add('visible')
    errorText.classList.add('visible')
  } else {
    field.className = 'invalid'
    errorIcon.classList.remove('visible')
    errorText.classList.remove('visible')
  }
}

userInput.addEventListener('keyup', (e) => {
  validate(e.target, pattern[e.target.attributes.name.value])
})


