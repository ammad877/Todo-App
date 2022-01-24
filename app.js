const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;
  if (userEnteredValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active"); 
  }
};

showTask();

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if( !getLocalStorageData ){
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorageData);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}

function showTask(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if( getLocalStorageData == null){
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorageData);
    }
    let newLiTag =  " ";
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML =  newLiTag;
   inputBox.value = '';
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorageData);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}
