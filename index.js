
const Task = []
let selectedImportance = ""
const InputTask = document.getElementById("inputTask")
const InputBtn = document.getElementById("submit")
const errormsg = document.getElementById("error")
const listItem = document.getElementById("listItem")
const DueDate = document.getElementById("dueDate")
const VeryImp = document.getElementById("Very")
const NormalImp = document.getElementById("Normal")
const NotImp = document.getElementById("Not")
const categoryMenu = document.getElementById("category");
const OrgTask = document.getElementById("orgtask");
const OrgCat = document.getElementById("orgcat");
const OrgDue = document.getElementById("orgdue");
const OrgImport = document.getElementById("orgimpot");


VeryImp.addEventListener("click", () => (selectedImportance = "Very"))
NormalImp.addEventListener("click", () => (selectedImportance = "Normal"))
NotImp.addEventListener("click", () => (selectedImportance = "Not"))

InputBtn.addEventListener("click", function () {
    const TaskText = InputTask.value.trim();
    const Duetext = DueDate.value.trim();
    const selectedCategory = categoryMenu.value;

    if (TaskText === "") {
        errormsg.innerText = "Please enter a task!";
        return;
    }
    if (selectedCategory === "") {
        errormsg.innerText = "Please select a category!";
        return;
    }

    errormsg.innerText = "";

    const newtask = {
        Task: TaskText,
        Category: selectedCategory,
        Due: Duetext || "No due date",
        Importance: selectedImportance || "Not specified"
    };

    Task.push(newtask);

    const todo = document.createElement("tr");
    todo.innerHTML = `
        <td>${newtask.Task}</td>
        <td>${newtask.Category}</td>
        <td>${newtask.Due}</td>
        <td>${newtask.Importance}</td>
    `;

    // Click to remove
    todo.addEventListener("click", function () {
        const index = Task.indexOf(newtask);
        if (index > -1) Task.splice(index, 1);
        todo.remove();
        console.log(Task);
    });

    listItem.appendChild(todo);

    InputTask.value = "";
    DueDate.value = "";
    categoryMenu.value = "";
    selectedImportance = "";
    });
    function renderTassk(Tasktore)
    OrgTask.addEventListener("click" function(){

    })
    OrgCat.addEventListener("click" function(){
        
    })
    OrgDue.addEventListener("click" function(){
        
    })
    OrgImport.addEventListener("click" function(){


        
    })
