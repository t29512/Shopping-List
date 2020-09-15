var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/* Add New List */

function checkInputLength() {
    return input.value.length;
}

function createNewList() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    var lineBreak = document.createElement("br");
    li.appendChild(document.createTextNode(input.value));
    button.appendChild(document.createTextNode("Delete"));
    ul.appendChild(li);
    ul.appendChild(button);
    ul.appendChild(lineBreak);
    input.value = "";
    button.addEventListener("click", function () {
        ul.removeChild(button.previousElementSibling);
        ul.removeChild(button.previousElementSibling);
        ul.removeChild(button);
    })
}

enter.addEventListener("click", function () {
    if (checkInputLength() > 0) {
        createNewList();
    }
})

input.addEventListener("keypress", function () {
    if (checkInputLength() > 0 && event.keyCode === 13) {
        createNewList();
    }
})

/* Toggle Done List */

var listItems = document.querySelectorAll("li");

listItems.forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.toggle("done");
    })
})

/* Delete List item */

var listButtons = document.querySelectorAll("ul > button");

listButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        ul.removeChild(button.previousElementSibling);
        ul.removeChild(button.previousElementSibling);
        ul.removeChild(button);
    })
})