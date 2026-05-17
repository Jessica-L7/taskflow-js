const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskCounter = document.getElementById("task-counter");

function addTask(){
  if(inputBox.value.trim() === ''){
    alert("You must write a task");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild (span);
  }
  inputBox.value = "";
  updateTaskCounter();
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  saveData();}
    else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      updateTaskCounter();
      saveData();
    }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

inputBox.addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function updateTaskCounter() {

  const totalTasks = listContainer.children.length;

  if(totalTasks === 1){
    taskCounter.innerHTML = `${totalTasks} task`;
  }

  else{
    taskCounter.innerHTML = `${totalTasks} tasks`;
  }

}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
updateTaskCounter();

