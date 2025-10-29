# SBA: JavaScript into 

## Overview 
 Hello in this readme I will be going over the latest SBA that we are doing in class. 

 In this assessment, you will build a Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task. This app will require you to apply a wide range of JavaScript concepts, including arrays, objects, DOM manipulation, conditionals, and local storage to persist the task data.




## The challenge

You will create a dynamic task management app that lets users:
1. Add new tasks with details such as the task name, category, deadline, and status.
    - Create input fields for the task name, category, deadline, and an initial status (e.g., “In Progress”).
    - Include an “Add Task” button that will add the task to the task list.
    - Each task should be stored as an object with properties such as task name, category, deadline, and status.
    - Add the task object to an array that holds all tasks.
2. Displaying the Task List
    - Create an HTML structure (such as an unordered list or table) to display the task list.
    - For each task, display the task name, category, deadline, and status.
    - Dynamically update the task list in the browser each time a new task is added or a status is updated.
2. Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
    - Allow users to update the status of tasks (e.g., “In Progress,” “Completed”) via a dropdown or button.
    - Automatically check each task’s deadline and mark tasks as “Overdue” if the current date has passed the deadline.
    -  Update the displayed task list whenever a task’s status changes
3. Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).

4. Filter tasks by status or category.
    - Add functionality to filter tasks by category or status (e.g., show only “Completed” tasks or tasks under the “Work” category).
    - Provide a dropdown or set of buttons for users to choose a filter.
    - When a filter is selected, only display the tasks that match the selected category or status.

5. Persist task data using local storage so tasks are saved even after refreshing the page.
    - Use local storage to save the current state of the task list so that tasks are restored when the page is refreshed.
    - Ensure that task data (including name, category, deadline, and status) is stored and retrieved correctly.



Project Instructions
Create the HTML Structure

1. Input fields for task name, category, deadline, and status.
    - A button to add new tasks.
    - A dropdown or buttons to filter tasks by status or category.
    - A display area to show the list of tasks, including options to update task status.
    - Write the JavaScript Code

2. Use an array to store tasks, each represented as an object.
Write functions to add tasks, update task status, check overdue tasks, and filter tasks.
    - Use DOM manipulation to display the task list dynamically.
    - Implement local storage to persist task data.
    - Test Your Application

3. Add multiple tasks and ensure they are displayed correctly.
    - Test the “Update Status” functionality to ensure tasks can be marked as “Completed” or 
    “Overdue.”
    - Filter tasks by status or category and ensure the correct tasks are displayed.
    - Refresh the page and ensure the tasks are restored from local storage.

## how the website works 
1. you will enter a task 
    - if you do not enter a task and press enter you will an error messaage will display
2. you enter the date you need the task done (optional)
3. you select its importance.
4. You select the category
    - If you dont a message will display 
5. also optional you can select the sort by it automatically sorts by the date. 
6. You can hit submit to enter the taask and when you are done with the task and want to show it complete , you can just simply click the task and it will cross out itself (used by combining css and javascript)

## What I did 

1. I made the HTML for the page.
 - I started with making the page without stylingto have a basic, skeleton to work on to 
 ensure the coding works when i move to js file. 
 - After making the skeleton I moved on to the Java script of the page. 
2. I moved to Javascript
    - in this point I started by asigning the ID's a connst value. 
    - I wanna start with making an aoo that could at the very least take down the information into a table or list and have all the info present. 
    - I then changed my code from being a simple list into A table  so you can see everyhting in a table like way .
    - I also added the Task input an array that could be recalled into the table. 
    - I also added functions and ways to print it on the screen If there was a mess up
    - I changed the list into a table to better see what needs to be done 
    - I also changed the input for the date into a date so people can just put in a date (however i will need to figure out later how to add time)
    - i later changed some of the more complex coding into a function to make it look smoother in the code. After that I added the storage last because I didn't know where to put it.

3. styling 
    - I Looked up a color scheme using figma and changed the colors accordingly 
    - I used coloring to show over due thing and added colors to the buttons when you hover a
4. HTML- 
    - Lastly i went back to the HTML fixing the aria labels and adding roles for screen readers. during that time I was hopping around and making changes everywhere to fix slight mistakes in the code like typos and mismatch code. 
    



## What was used 
-  JavaScript
- HTML
- CSS
- array
- Bootstrap


## references 
- https://getbootstrap.com/docs/5.3/utilities/flex/#enable-flex-behaviors
- https://stackoverflow.com/questions/1462360/css-hover-one-element-effect-for-multiple-elements
- https://ps-lms.vercel.app/curriculum/se/411/sba

- https://www.w3schools.com/jsref/prop_html_innerhtml.asp
- https://www.figma.com/resource-library/color-combinations/
## Refection 
1. Challenges faced during the project.

- My long nemesis is telling time. I couldnt figure out for the longes how to make the dates. Additionally I make mistakes alot while typing and for something as unforgiving a Javascript i had to go line by line and reread my code alot. There was abunch I didn't know but my moto is " If i do not know it, I will shortly" so i spent time having to search foor things and look things up . 


2. How you approached solving those challenges. 
- I had to slow down eventually and double check my work even going so far to explain too myself what the code is doing to make sure the code is logically sound. I am a visual learner and hands on learner  and cannot be told words and expected to rememeber them. That being said I looked up example of things similar to what I needed to do and analyzed that then i typed it out and made and changed it to my code ( Probably made things harder. )

3. What you would improve if given more time.

- I would change the selection for importance more to be a drop down menu , I think it would look more uniformed that way but since i decided on buttons early on and had already wrote the Script for it , i decided to keep it and  make it look nice later 

### things to remeber for editing!
- add semantic HTML and correct structure . 
- Spell correctly in Javascript. 

### what I learned!
- In this lab I learned how to code using arrays and use their properties. 
```
if (t.Due !== "No due date") {
            const dueDate = new Date(t.Due);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (dueDate < today && !t.Completed) {
                todo.classList.add("overdue");
            }
        }
```

this segment of code took me a while to  look up and i still only partially understand it. 

``` 
    else if (sortBy === "Completed") {
            tasksToRender.sort((a, b) => (a.Completed === b.Completed ? 0 : a.Completed ? 1 : -1));
        }
```
this line of code also baffled me I think this means the .sort will sort the element  and if copleted is both true then 0 which would mean keep it the same. if it is completed then move it after b , then lastly if it isnt  completed move a before b. 
- the format button is your friend  and can tell you when you are missing symbols as well ! 


