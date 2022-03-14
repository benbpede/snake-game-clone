const writeName = document.querySelector("#write-name");
const input = writeName.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CN = "hidden";
const USERNAME_KEY = "username";

function submitName(event) {
  event.preventDefault();
  const username = input.value;
  localStorage.setItem(USERNAME_KEY, username);
  input.value = "";
  sayHello(username);
}

writeName.addEventListener("submit", submitName);

function sayHello(username) {
  writeName.classList.add(HIDDEN_CN);
  greeting.classList.remove(HIDDEN_CN);
  greeting.innerText = `Hello, ${username}`;
  const clock = document.querySelector(".clock");
  clock.classList.remove(HIDDEN_CN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername !== null) {
  sayHello(savedUsername);
} else {
  writeName.addEventListener("submit", submitName);
}
