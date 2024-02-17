const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

const showError = (input, message) => {
  let parentElement = input.parentElement;
  parentElement.classList = "form-control error";

  const small = parentElement.querySelector("small");

  const successIcon = parentElement.querySelectorAll("i")[0];
  const errorIcon = parentElement.querySelectorAll("i")[1];

  errorIcon.style.visibility = "visible";
  successIcon.style.visibility = "hidden";
  small.innerText = message;
};

const showsuccsess = (input) => {
  let parentElement = input.parentElement;
  parentElement.classList = "form-control success";

  const successIcon = parentElement.querySelectorAll("i")[0];
  const errorIcon = parentElement.querySelectorAll("i")[1];

  errorIcon.style.visibility = "hidden";
  successIcon.style.visibility = "visible";
};

const checkEmpty = (elements) => {
  elements.forEach((element) => {
    if (element.value === "") {
      showError(element, "input required");

      //   element.parentElement.classList = "form-control error";
    } else {
      showsuccsess(element);
    }
  });
};

const checkEmail = (email) => {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (reg.test(email.value)) {
    showsuccsess(email);
  }else {
    showError(email, 'invalid Email')
  }
};

const checkPassworLength = (input, min, max)=> {

    if(input.value.length < min){
        showError(input, 'Password must be at least 8 characters long.')
    }else if(input.value.length > max){
showError(input, 'Your password should not exceed 12 characters')
    }else{
        showsuccsess(password)
    }

}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkEmpty([username, email, password, confirmPassword]);
  checkEmail(email);
  checkPassworLength(password, 8, 12);
  checkPassworLength(confirmPassword, 8, 12);
  checkPassworMatch([password, confirmPassword])

  //   if (username.value === "") {
  //     username.parentElement.classList = "form-control error";
  //   }

  //   if (email.value === "") {
  //     email.parentElement.classList = "form-control error";
  //   }

  //   if (password.value === "") {
  //     password.parentElement.classList = "form-control error";
  //   }

  //   if (confirmPassword.value === "") {
  //     confirmPassword.parentElement.classList = "form-control error";
  //   }
});
