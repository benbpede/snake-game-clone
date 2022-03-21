const showBtn = document.querySelector(".show_btn button");
const inputBox = document.querySelector(".input_box");
const closeBtn = document.querySelector(".close_btn");

showBtn.addEventListener("click", showingInputBox);
closeBtn.addEventListener("click", closingInputBox);

function showingInputBox() {
  inputBox.classList.add("showing_input_box");
}

function closingInputBox() {
  inputBox.classList.remove("showing_input_box");
}
