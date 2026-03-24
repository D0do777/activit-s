let chart

function updateStats(){

let tasks=getTasks()

let done=tasks.filter(t=>t.done).length
let total=tasks.length

let ctx=document.getElementById("statsChart")

if(chart){

chart.destroy()

}

chart=new Chart(ctx,{

type:"doughnut",

data:{

labels:["Réussi","Restant"],

datasets:[{

data:[done,total-done]

}]

}

})

}
