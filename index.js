
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
const SortMenu = document.getElementById("Sort")
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        Task.push(...JSON.parse(savedTasks)); 
    }
    renderTasks(Task, SortMenu.value);
}
loadTasks();
//setting importance 

VeryImp.addEventListener("click", () => (selectedImportance = "Very"))
NormalImp.addEventListener("click", () => (selectedImportance = "Normal"))
NotImp.addEventListener("click", () => (selectedImportance = "Not"))

// localStorage
function SaveTask(){
    localStorage.setitem("task", JSON.stringify(task))
}
//rendering task
function renderTasks(tasksToRender = Task, sortBy ="") {
    listItem.innerHTML = "";
    // sorting the task
    if(sortBy=== "Alphabetical"){
        tasksToRender.sort((a,b) => a.Task.localeCompare(b.Task));
    }else if (sortBy === "Date") {
        tasksToRender.sort((a, b) => new Date(a.Due) - new Date(b.Due));
    } else if (sortBy === "Importance") {
        const importanceOrder = { "Very": 1, "Normal": 2, "Not": 3 };
        tasksToRender.sort((a, b) => (importanceOrder[a.Importance] || 4) - (importanceOrder[b.Importance] || 4));
    } else if (sortBy === "Category") {
        tasksToRender.sort((a, b) => a.Category.localeCompare(b.Category));
    }else if (sortBy === "Completed"){
       tasksToRender.sort((a, b) => (a.Completed === b.Completed? 0 : a.Completed? 1: -1));
    }

    tasksToRender.forEach((t) => {
        const todo = document.createElement("tr");
        if (t.completed){
             todo.classList.add("completed");;
        }
        if(t.due !== " No Due Date"){
            const dueDate = new Date(t.due);
            const today = new Date();
            today.setHours(0,0,0,0);
            if (dueDate < Today && !t.Completed){
                todo.classList.add("overdue")
            }
        }
        todo.innerHTML = `
            <td>${t.Task}</td>
            <td>${t.Category}</td>
            <td>${t.Due}</td>
            <td>${t.Importance}</td>
        `;

        todo.addEventListener("click", function () {
           todo.classList.toggle("completed");
           t.completed = !t.completed;
        if(t.completed) todo.classList.remove("overdue");

        savedTasks();
        });

        listItem.appendChild(todo);
    });
} 
SortMenu.addEventListener("change", function(){
    renderTasks(Task, SortMenu.value)
    SaveTask()
})

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
        Importance: selectedImportance || "Not specified", 
        Completed: false
    };

    Task.push(newtask);

    renderTasks(Task, SortMenu.value);
    SaveTask()
    
    InputTask.value = "";
    DueDate.value = "";
    categoryMenu.value = "";
    selectedImportance = "";
    });
    
    
    