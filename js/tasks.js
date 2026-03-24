function addTask(){

let title = document.getElementById("title").value
let subtitle = document.getElementById("subtitle").value
let icon = document.getElementById("icon").value
let time = document.getElementById("time").value
let repeat = document.getElementById("repeat").value

let tasks = getTasks()

tasks.push({
id:Date.now(),
title,
subtitle,
icon,
time,
repeat,
done:false,
date:new Date().toISOString().split("T")[0]
})

saveTasks(tasks)

renderTasks()

}

function toggleTask(id){

let tasks = getTasks()

tasks = tasks.map(task=>{
if(task.id===id){
task.done=!task.done
}
return task
})

saveTasks(tasks)

renderTasks()

}

function renderTasks(){

let list = document.getElementById("taskList")

list.innerHTML=""

let tasks = getTasks()

tasks.sort((a,b)=>a.time.localeCompare(b.time))

tasks.forEach(task=>{

let div=document.createElement("div")

div.className="task"

div.innerHTML=`

<div class="taskInfo">

<div class="icon">${task.icon}</div>

<div>

<b>${task.title}</b>

<br>

<small>${task.subtitle}</small>

</div>

</div>

<input type="checkbox"
${task.done ? "checked":""}
onclick="toggleTask(${task.id})">

`

list.appendChild(div)

})

}
