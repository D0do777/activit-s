function getTasks(){

let tasks = localStorage.getItem("tasks")

return tasks ? JSON.parse(tasks) : []

}

function saveTasks(tasks){

localStorage.setItem("tasks", JSON.stringify(tasks))

}
