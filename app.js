const inputs = document.querySelectorAll('input');
const form = document.getElementById("form");

const expressions = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/
}

const fields = {
  name: false,
  lName: false,
  username: false,
  email: false,
  password: false
}

const validateForm = (e) => {
  switch (e.target.name) {
    case 'name':
      validateInput(expressions.name, e.target, 'name');
    break;
    case 'lName': 
      validateInput(expressions.name, e.target, 'lName');
    break;
    case 'username': 
      validateInput(expressions.user, e.target, 'username');
    break;
    case 'email': 
      validateInput(expressions.email, e.target, 'email');
    break;
    case 'password': 
      validateInput(expressions.password, e.target, 'password');
      validatePass();
    break;
    case 'password2':
      validatePass();
    break;
  }
}


inputs.forEach(input => {
  input.addEventListener("keyup", validateForm);
});

const validateInput = (expression, input, field) => {
  if (expression.test(input.value)) {
    document.querySelector(`.form__group--${field}`).classList.add("success");
    document.querySelector(`.form__group--${field}`).classList.remove("error");
    document.querySelector(`.form__group--${field} i`).classList.add("bx-check-circle");
    document.querySelector(`.form__group--${field} i`).classList.remove("bx-x-circle");
    fields[field] = true;
  } else {
    document.querySelector(`.form__group--${field}`).classList.remove("success");
    document.querySelector(`.form__group--${field}`).classList.add("error");
    document.querySelector(`.form__group--${field} i`).classList.remove("bx-check-circle");
    document.querySelector(`.form__group--${field} i`).classList.add("bx-x-circle");
    fields[field] = false;
  }
}

const validatePass = () => {
  const password1 = document.getElementById('password');
  const password2 = document.getElementById('password2');

  if (password1.value !== password2.value) {
    document.querySelector(`.form__group--password2`).classList.remove("success");
    document.querySelector(`.form__group--password2`).classList.add("error");
    document.querySelector(`.form__group--password2 i`).classList.remove("bx-check-circle");
    document.querySelector(`.form__group--password2 i`).classList.add("bx-x-circle");
  } else {
    document.querySelector(`.form__group--password2`).classList.add("success");
    document.querySelector(`.form__group--password2`).classList.remove("error");
    document.querySelector(`.form__group--password2 i`).classList.add("bx-check-circle");
    document.querySelector(`.form__group--password2 i`).classList.remove("bx-x-circle");
  }
}


// Prevent Default
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fields['name'] && fields['lName'] && fields['email'] && fields['username'] && fields['password']) {
    alert("Sending form...");
  } else {
    alert("Please complete fields");
  }
})