const inputBox=document.getElementById('input-box');
const button=document.getElementById('add-button');
const container=document.getElementById('list-container')
const error=document.getElementById('error')

const addTask=()=>{
    if(inputBox.value===""){
        error.innerHTML="you must write something!"
    }
    else{
        error.innerHTML = "";
        let li= document.createElement("li");
        li.innerHTML=inputBox.value ;
        container.appendChild(li)
        inputBox.value = "";
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    saveData();

}

container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();

    }else if(e.target.tagName==="SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
},false)


const saveData=()=>{
    localStorage.setItem("data", container.innerHTML);
}

const showData=()=>{
    container.innerHTML=localStorage.getItem("data");
}

showData();