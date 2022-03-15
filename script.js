function addList(){
    let inputList = document.querySelector("#input");
    
    if(inputList.value){
        let newList = document.createElement("li");
        newList.setAttribute("class", "list-group-item");
        newList.append(inputList.value);
        newList.setAttribute("onclick", "removeList(this)");
        
        let icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.append("x");
        newList.append(icon);
    
        let ul = document.querySelector("#ul");
        ul.append(newList);

        inputList.value = '';
    }
}

function removeList(e){
    e.remove();
}