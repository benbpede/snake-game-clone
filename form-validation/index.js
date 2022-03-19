const username = document.querySelector("#username");
const userid = document.querySelector("#userid");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const form = document.querySelector("#form");

function checkLength(input, min, max) {
  if (0 < input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)}을 최소 ${min}자 이상 작성하십시오.`
    );
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)}을 ${max}자 이내로 작성하십시오.`);
  } else if (input.value === "") {
    checkError(input);
  } else {
    showSuccess(input);
  }
}

function checkError(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  if (input.id === "username") {
    small.innerText = `이름을 입력하세요.`;
  } else if (input.id === "userid") {
    small.innerText = `아이디를 입력하세요.`;
  } else if (input.id === "password") {
    small.innerText = `비밀번호를 입력하세요.`;
  } else if (input.id === "password2") {
    small.innerText = `비밀번호를 입력하세요.`;
  }
}

function checkEmail(input) {
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (regEmail.test(input.value.trim())) {
  }
}

form.addEventListener("submit", init);

function inputRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function init(event) {
  event.preventDefault();
  if (inputRequired([username, userid, password, password2])) {
    checkError(username);
    checkError(userid);
    checkError(password);
    checkError(password2);
  }
}
