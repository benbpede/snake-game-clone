const submitBtn = document.querySelector(".submit_btn");
const historyList = document.querySelector(".history_list");
const selectBox = document.querySelector("#select_box");
const subjectInput = document.querySelector(".subject input");
const priceInput = document.querySelector(".price input");

function submitAccount(event) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = selectBox.options[selectBox.selectedIndex].text;
  const subject = document.createElement("subject");
  subject.innerText = subjectInput.value;
  console.log(typeof subjectInput.value);
  const price = document.createElement("price");
  price.innerText = priceInput.value;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(subject);
  li.appendChild(price);
  li.appendChild(button);
  historyList.appendChild(li);
}

submitBtn.addEventListener("click", submitAccount);

function hi(event) {
  event.preventDefault();
  console.log("hi");
}
