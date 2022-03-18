const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const logoutBtn = document.querySelector(".btn-logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function showOption(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function hideOption() {
  greeting.innerText = "";
  greeting.classList.add(HIDDEN_CLASSNAME);

  todoForm.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(USERNAME_KEY, username);
  showOption(username);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  // show the form
  onLogout();
} else {
  showOption(savedUserName);
}

function onLogout() {
  localStorage.removeItem(USERNAME_KEY);

  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);

  hideOption();
}

logoutBtn.addEventListener("click", onLogout);
