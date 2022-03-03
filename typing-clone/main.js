var target = document.querySelector("#dynamic");

//커서 깜빡임
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

var textArr = [
  "Learn to HTML",
  "Learn to CSS",
  "Learn to JavaScript",
  "Learn to Python",
  "Learn to Ruby",
];

function typingText(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      typingText(randomArr);
    }, 80);
  } else {
    setTimeout(function () {
      resetText();
    }, 3000);
  }
}

function resetText() {
  target.textContent = " ";
  typingText(randomText());
}

function randomText() {
  var selectText = textArr[Math.floor(Math.random() * textArr.length)];
  var textTypingArr = Array.from(selectText);
  return textTypingArr;
}

typingText(randomText());
