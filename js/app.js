function showPage(id){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"))

document.getElementById(id)
.classList.add("active")

if(id==="statsPage"){
updateStats()
}

}

renderTasks()
updateStats()
