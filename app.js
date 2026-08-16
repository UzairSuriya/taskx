const addBtn = document.getElementById("add-btn");
const inputEl = document.getElementById("input-el");
const container = document.querySelector(".container");
const errorMsg = document.getElementById("error-msg");
const errMsg = document.createElement("p");

function newtask() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  const newInput = document.createElement("input");
  newInput.classList.add("todo-checkbox");
  newInput.type = "checkbox";

  const newPara = document.createElement("p");
  newPara.classList.add("todo-text")
  newPara.textContent = inputEl.value;

  const dltButton = document.createElement("i");
  dltButton.classList.add("fa-solid", "fa-trash", "delete-btn");
//   dltButton.id = "delete-btn";

  newDiv.appendChild(newInput);
  newDiv.appendChild(newPara);
  newDiv.appendChild(dltButton);
  container.appendChild(newDiv);
  
  dltButton.addEventListener("click", () => {
    newDiv.remove();
    errorMsg.appendChild(errMsg);
    errMsg.style.color = "#5cb85c";
    errMsg.innerText = "Successfully Deleted The Task";
  });
}

addBtn.addEventListener("click", () => {
  if (inputEl.value.trim() === "") {
    errMsg.style.color = "red";
    errMsg.innerText = "Please Enter New Task";
    errorMsg.appendChild(errMsg);
    inputEl.value = "";
  } else {
    newtask();
    inputEl.value = "";
    errMsg.textContent = "";
  }
});
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
