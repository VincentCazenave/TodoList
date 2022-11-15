var tasks = []

function newTask() {
    var task = document.getElementById("taskName").value;
    
    if(task == ""){
        
        document.getElementById('modal').style.display = 'block';
        document.getElementById('taskName').style.border="1px solid red";
        setTimeout( () => {
            document.getElementById('modal').style.display = 'none';
        }, 2000 )
    }else{
        displayTasks(task);
    }

    document.getElementById("taskName").addEventListener('click', function(e) {
        document.getElementById('taskName').style.border="none";      
    })

}

function displayTasks(task){
    
    let table = document.getElementById('displayTasks');

    let ligne = document.createElement('tr');
    let cellule = document.createElement('td');
    let celluleCheck = document.createElement('td');
    let celluleDelete = document.createElement('td');
    ligne.setAttribute('id', task);
    
    cellule.innerHTML = task;
    celluleCheck.innerHTML = '<button class="checkButton" onclick="checkTask(vincent)">CHECK</button>';
    celluleDelete.innerHTML = '<button class="deleteButton" onclick="deleteTask(vincent)">DELETE</button>';

    ligne.appendChild(cellule);
    ligne.appendChild(celluleCheck);
    ligne.appendChild(celluleDelete);
    table.appendChild(ligne);
}
  

function checkTask(id){
    let check = document.getElementById(id);
    check.innerHTML = "";
}

function deleteTask(id){
    let del = document.getElementById(id);
    del.innerHTML = "";
}