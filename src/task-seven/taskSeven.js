function addListItem() {
    const list = document.getElementById("myList");
    const newListItem = document.createElement("li");
    newListItem.textContent = "new element";
    list.appendChild(newListItem);
}

document.getElementById("addButton").addEventListener("click", addListItem);