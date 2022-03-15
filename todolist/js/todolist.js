const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");

var toDos = [];

function submitTodo(event) {
  event.preventDefault();
  var todo = todoInput.value;
  var todos = toDos.push(todo);
  localStorage.setItem("todos", todos);
  paintTodo(todo);
  todoInput.value = "";
}

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
