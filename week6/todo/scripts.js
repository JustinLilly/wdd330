const clear = document.querySelector(".clear");
const dateElement = document.getElementById("#date");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

const check = "far fa-check-circle";
const uncheck = "fa-circle-thin";
const linethru = "linethrough";

let toDoList, id;

let data = localStorage.getItem("todo");

if(data){
    toDoList = JSON.parse(data);
    id = toDoList.length;
    loadList(toDoList);

} else{
    toDoList = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

function addToDo(toDo, id, done, trash) {

    if(trash){return};
    const DONE = done ? check : uncheck;
    const LINE = done ? linethru : "";

    const text = `<li class="item">
                    <p class="text ${LINE}">${toDo}</p>
                    <span class="fa ${DONE} co" job="complete" id="${id}"></span>
                    <i class="fa fa-trash-o de" job="remove" id="${id}"></i>
                 </li>`;

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function(even){
    // keyCode 13 is Enter key
    if(event.keyCode == 13 ){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo, id, false, false);
            toDoList.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem("todo", JSON.stringify(toDoList)); 
            id++;
        }
        input.value = "";
    }
});


function completeToDo(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(linethru);
    toDoList[element.id].done = toDoList[element.id].done ? false : true;
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    toDoList[element.id].trash = true;
}

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = event.target.attributes.job.value;
    if(elementJob == "complete") {
        completeToDo(element);
    } else if(elementJob == "remove"){
        removeToDo(element);
    }
    localStorage.setItem("todo", JSON.stringify(toDoList));
});