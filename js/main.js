let InputBox=document.getElementById("input-box");
let listContainer=document.getElementById("list-Container");

function addTask(){
    if(InputBox.value === ''){
        alert("You Must Write Something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=InputBox.value;
        listContainer.appendChild(li)
        let span =document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    InputBox.value ="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
