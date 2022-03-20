const username = document.querySelector("#username");
const userid = document.querySelector("#userid");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const form = document.querySelector("#form");
const notbot = document.querySelector("#numberPlus");
const agree = document.querySelector("#agree");

const randomNum = Math.floor(Math.random() * 90) + 10;
const randomNum2 = Math.floor(Math.random() * 90) + 10;

randomMath(randomNum, randomNum2);

function randomMath(randomNum, randomNum2) {
  const numberLabel = document.querySelector("#num");

  numberLabel.innerText = `${randomNum} + ${randomNum2}`;
}

form.addEventListener("submit", init);

function init(event) {
  event.preventDefault();
  inputRequired([username, userid, password, email]);
  checkPassword(password, password2);
  checkGender(gender);
  checkPlus(notbot);
  checkAgree(agree);
}

function inputRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      // required
      showError(input, `${input.name}(을/를) 입력해주세요.`);
    } else {
      //checkLength
      checkLength(username, 2, 15);
      checkLength(userid, 6, 18);
      checkLength(password, 8, 20);
      checkEmail(email);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.trim().length < min) {
    // min 자 이상 작성하세요.
    showError(input, `${input.name}(을/를) ${min}자 이상 입력하세요.`);
  } else if (input.value.trim().length > max) {
    ///max 자 이하로 작성하세요.
    showError(input, `${input.name}(을/를) ${max}자 이하 입력하세요.`);
  } else {
    //success
    showSuccess(input);
  }
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

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    //error
    showError(input2, `${input1.name}가 일치하지 않습니다.`);
  } else {
    //success
    showSuccess(input2);
  }
}

function checkEmail(input) {
  var regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (regEmail.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${input.name} 양식이 맞지 않습니다.`);
  }
}

function checkGender(select) {
  const value =
    gender.options[document.getElementById("gender").selectedIndex].value;
  if (value === "") {
    showError(select, `${select.name}을 선택해주세요.`);
  } else {
    showSuccess(select);
  }
}

function checkPlus(input) {
  if (randomNum + randomNum2 == input.value) {
    showSuccess(input);
  } else {
    showError(input, `정답이 아닙니다.`);
  }
}

function checkAgree(input) {
  if (input.checked) {
    //checked
    showSuccess(input);
  } else {
    //not checked
    showError(input, `약관에 동의해주세요.`);
  }
}
