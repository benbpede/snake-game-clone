const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");

var toDos = [];
var savedTodos = JSON.parse(localStorage.getItem("todos"));

function submitTodo(event) {
  event.preventDefault();
  var todo = todoInput.value;
  toDos.push(todo);
  localStorage.setItem("todos", JSON.stringify(toDos));
  paintTodo(todo);
  todoInput.value = "";
}

// function savedTodo() {
//   l
// }

function paintTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", submitTodo);

if (savedTodos !== null) {
  paintTodo(savedTodos);
}
