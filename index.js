const InputTask = document.getElementById("inputTask")
const InputBtn = document.getElementById("submit")
const errormsg = document.getElementById("error")
const listItem = document.getElementById("listItem")

InputBtn.addEventListener("click", function () {
  let TaskText = InputTask.value;
 
  if (TaskText === "") {
    errormsg.innerText= "Please enter a task!"
    return;
  }
 
  let todo = document.createElement("li");
  todo.innerText = TaskText;

   listItem.appendChild(todo);
  InputTask.value = ""; // Clear the input field
});