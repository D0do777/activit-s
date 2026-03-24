document.getElementById("dateSelector").addEventListener("change",showHistory)

function showHistory(){

let date=document.getElementById("dateSelector").value

let tasks=getTasks()

let list=document.getElementById("historyList")

list.innerHTML=""

tasks
.filter(t=>t.date===date)
.forEach(task=>{

let div=document.createElement("div")

div.className="task"

div.innerHTML=`

${task.icon} ${task.title} 
${task.done ? "✅" : "❌"}

`

list.appendChild(div)

})

}
