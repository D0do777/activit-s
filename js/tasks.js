let selectedDays=[]

document.querySelectorAll(".day").forEach(btn=>{

btn.onclick=()=>{

btn.classList.toggle("active")

let day=btn.dataset.day

if(selectedDays.includes(day)){

selectedDays=selectedDays.filter(d=>d!==day)

}else{

selectedDays.push(day)

}

}

})

function addTask(){

let title=document.getElementById("title").value
let subtitle=document.getElementById("subtitle").value
let icon=document.getElementById("icon").value
let time=document.getElementById("time").value

if(!title){
alert("Ajoute un titre")
return
}

let tasks=getTasks()

tasks.push({

id:Date.now(),
title,
subtitle,
icon,
time,
days:selectedDays,
done:false

})

saveTasks(tasks)

resetForm()

showPage("todayPage")

renderTasks()

updateStats()

}

function toggleTask(id){

let tasks=getTasks()

tasks=tasks.map(task=>{

if(task.id===id){
task.done=!task.done
}

return task

})

saveTasks(tasks)

renderTasks()

updateStats()

}

function deleteTask(id){

let tasks=getTasks()

tasks=tasks.filter(t=>t.id!==id)

saveTasks(tasks)

renderTasks()

updateStats()

}

function renderTasks(){

let list=document.getElementById("taskList")

list.innerHTML=""

let today=new Date().getDay()

let tasks=getTasks()

tasks
.filter(task=>task.days.length===0 || task.days.includes(String(today)))
.sort((a,b)=>a.time.localeCompare(b.time))
.forEach(task=>{

let div=document.createElement("div")

div.className="task"

div.innerHTML=`

<div class="taskInfo">

<div class="icon">${task.icon}</div>

<div>

<b>${task.title}</b><br>
<small>${task.subtitle}</small>

</div>

</div>

<div>

<input type="checkbox"
${task.done?"checked":""}
onclick="toggleTask(${task.id})">

<button class="deleteBtn" onclick="deleteTask(${task.id})">🗑</button>

</div>

`

list.appendChild(div)

})

}

function resetForm(){

document.getElementById("title").value=""
document.getElementById("subtitle").value=""
document.getElementById("time").value=""

selectedDays=[]

document.querySelectorAll(".day")
.forEach(b=>b.classList.remove("active"))

}
