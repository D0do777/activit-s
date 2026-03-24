function loadStats(){

let tasks=getTasks()

let done=tasks.filter(t=>t.done).length
let total=tasks.length

let ctx=document.getElementById("statsChart")

new Chart(ctx,{
type:"doughnut",
data:{
labels:["Fait","Restant"],
datasets:[{
data:[done,total-done]
}]
}
})

}
