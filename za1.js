function add() {
    let name = document.querySelector(".name").value;
    let list = document.querySelector(".list");
    let li = document.createElement("li");
    li.style.color="blue";
    li.style.fontSize="20px";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight="10px"
    let button = document.createElement("button");
    button.innerText = "Удалить";
    button.style.marginLeft="10px";
    button.style.fontSize = "20px";
    button.onclick = function() {
        li.remove();
    }
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(name));
    li.appendChild(button);
    list.appendChild(li);
}
