const username = document.querySelector("#username");
const userid = document.querySelector("#userid");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");

function checkLength(input, min, max) {
  if (input.value.length < min) {
    `${input}을 최소 ${min}자 이상 작성하십시오.`;
  } else if (input.value.length > max) {
    `${input}을 ${max}자 이내로 작성하십시오.`;
  } else {
    success;
  }
}

form.addEventListner("submit", checkLength);
