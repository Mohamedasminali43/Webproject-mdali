const input = document.getElementById("input-box")
const list = document.getElementById("list-container")

function addTask(){
    if (input.value ==='') {
        alert("Please enter a value!..")
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li)
        let span = document.createElement("span")
            span.innerHTML = "\u00d7";
            li.appendChild(span)
    }
    input.value = ''
    saveData();
}
list.addEventListener("click",function (el) {
    if (el.target.tagName === "LI") {
        el.target.classList.toggle("checked");
        saveData();
    }
    else if(el.target.tagName === "SPAN"){
        el.target.parentElement.remove();
        saveData()
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

