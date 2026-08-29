const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const inputEl = document.getElementById("input-el");
const container = document.querySelector(".container");
const errorMsg = document.getElementById("error-msg");
const errMsg = document.createElement("p");
const allTodos = document.createElement("div");
allTodos.classList.add("todos");

let count = Number(localStorage.getItem("taskCounter")) || 0;

function newTask(taskText, taskKey) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");

  const newInput = document.createElement("input");
  newInput.classList.add("todo-checkbox");
  newInput.type = "checkbox";

  const newPara = document.createElement("p");
  newPara.classList.add("todo-text");
  newPara.textContent = taskText;

  const dltButton = document.createElement("i");
  dltButton.classList.add("fa-solid", "fa-trash", "delete-btn");

  newDiv.appendChild(newInput);
  newDiv.appendChild(newPara);
  newDiv.appendChild(dltButton);
  allTodos.appendChild(newDiv);
  container.appendChild(allTodos);

  dltButton.addEventListener("click", () => {
    newDiv.remove();
    errorMsg.appendChild(errMsg);
    errMsg.style.color = "#5cb85c";
    errMsg.innerText = "Successfully Deleted The Task";
    localStorage.removeItem(taskKey);
  });
}

function storeTask(taskText, taskKey) {
  localStorage.setItem(taskKey, taskText);
  localStorage.setItem("taskCounter", count);
}

addBtn.addEventListener("click", () => {
  if (inputEl.value.trim() === "") {
    errMsg.style.color = "red";
    errMsg.innerText = "Please Enter New Task";
    errorMsg.appendChild(errMsg);
    inputEl.value = "";
  } else {
    count++;
    const taskText = inputEl.value.trim();
    newTask(taskText, count);
    storeTask(taskText, count);
    inputEl.value = "";
    errMsg.textContent = "";
  }
});

inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

clearBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  allTodos.innerHTML = ``;
  allTodos.remove();
  inputEl.focus();
  count = 0;
});

function render() {
  const totalTask = localStorage.length;
  for (let i = 0; i < totalTask; i++) {
    const taskKey = localStorage.key(i);

    if (taskKey === "taskCounter") continue;

    const taskText = localStorage.getItem(taskKey);
    if (taskText) {
      newTask(taskText, taskKey);
    }
  }
}

render();
