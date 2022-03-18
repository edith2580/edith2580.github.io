const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handelDeleteToDo(event) {
  const li = event.target.parentElement;

  // 간략화
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  /*  
  toDos = toDos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });
*/

  li.remove();
  saveToDos();
}

function addToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", handelDeleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  const newTodoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTodoObj);

  toDoInput.value = "";

  addToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);

  toDos = parsedToDos;
  // parsedToDos.forEach(updateTodo);
  parsedToDos.forEach(addToDo);
}
